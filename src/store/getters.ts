import { GetterTree } from "vuex";
import { EventData, State, User } from "./state";
import { isEmpty, isNil, chunk } from "lodash";
import { timeLabelGenerator, getLabelTop, getMonths } from "../utils";

export type Getters = {
  usernameExist(state: State): boolean;
  getUserID(state: State): null | string;
  getEventData(state: State): EventData;
  getAvailability(state: State): { [key: string]: string[] };
  getSplitAvailabilities(state: State, getters: Getters): string[][][] | void;
  getEventName(state: State): string;
  getTimeLabels(state: State): string[];
  getTopLabel(state: State): string;
  getPageNumbers(state: State, getters: Getters): number;
  getParticipantList(state: State): User[];
  getEventDetails(
    state: State
  ): { created: string; author: string; participants: number };
};

export const getters: GetterTree<State, State> & Getters = {
  usernameExist(state) {
    return state.userID.length > 0;
  },
  getUserID(state) {
    return state.userID;
  },
  getEventData(state) {
    return state.eventData;
  },
  getAvailability(state) {
    return state.eventData.availability;
  },
  getSplitAvailabilities(state, getters) {
    // split availability data into a 3d array.
    // dimension 1: pages
    // dimension 2: days (6 days per page)
    // dimension 3: hour (`numofTimings` hours per day)

    if (isEmpty(state.eventData)) {
      return [[[]]];
    }
    const numofTimings = getters.getTimeLabels.length;
    const arr = Object.keys(state.eventData.availability);
    const days = chunk(arr, numofTimings);
    const NUMBER_OF_DAYS_PER_PAGE = 6;
    return chunk(days, NUMBER_OF_DAYS_PER_PAGE);
  },

  getPageNumbers(state, getters) {
    return getters.getSplitAvailabilities.length - 1;
  },

  getEventName(state) {
    return state.eventData.event_name;
  },
  getTimeLabels(state) {
    if (isEmpty(state.eventData)) {
      return [];
    }
    return timeLabelGenerator(
      state.eventData.start_time,
      state.eventData.end_time
    );
  },
  getTopLabel(state) {
    if (isEmpty(state.eventData)) {
      return "";
    }
    return getLabelTop(state.eventData.start_date, state.eventData.end_date);
  },
  getParticipantList(state) {
    if (isEmpty(state.eventData)) {
      return [];
    }
    return state.eventData.users;
  },
  getEventDetails(state) {
    if (isEmpty(state.eventData)) {
      return { created: "", author: "", participants: 0 };
    }
    const date = new Date(state.eventData.createdAt);
    const monthNames = getMonths();
    const created = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
    const participants = state.eventData.users.length;
    let author;
    if (participants === 0) {
      author = "unknown";
    } else {
      author = state.eventData.users[0].name;
    }
    return { created, author, participants };
  },
};
