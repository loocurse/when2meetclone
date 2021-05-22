import { GetterTree } from "vuex";
import { Availability, EventData, State, User } from "./state";
import { isEmpty, isNil, chunk } from "lodash";
import { timeLabelGenerator, getLabelTop, splitToChunks } from "../utils";

export type Getters = {
  usernameExist(state: State): boolean;
  getUserID(state: State): null | string;
  getEventData(state: State): EventData;
  getAvailability(state: State): Availability;
  getSplitAvailabilities(state: State): any;
  getEventName(state: State): string;
  getTimeLabels(state: State): string[];
  getTopLabel(state: State): string;
  getParticipantList(state: State): User[];
};

export const getters: GetterTree<State, State> & Getters = {
  usernameExist(state) {
    return isNil(state.userID);
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
  getSplitAvailabilities(state) {
    if (isEmpty(state.eventData)) {
      return;
    }
    return splitToChunks(state.eventData.availability, 6);
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
};
