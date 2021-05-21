import { MutationTree } from "vuex";
import { State, EventData } from "./state";

export enum MutationType {
  FetchAvailability = "FETCH_AVAILABILITY",
  AddAvailability = "ADD_AVAILABILITY",
  RemoveAvailability = "REMOVE_AVAILABILITY",
  AddUserName = "ADD_USERNAME",
  RetrieveUserID = "RETRIEVE_USERID",
}

export type Mutations = {
  [MutationType.FetchAvailability](state: State, data: EventData): void;
  [MutationType.AddAvailability](state: State, content: any): void;
  [MutationType.RemoveAvailability](state: State, content: any): void;
  [MutationType.AddUserName](state: State, content: any): void;
  [MutationType.RetrieveUserID](state: State, content: any): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.FetchAvailability](state, data) {
    state.eventData = data;
  },
  [MutationType.AddAvailability](state, content) {
    const { unixtime } = content;
    const userID = state.userID;
    if (state.eventData.availability[unixtime].indexOf(userID) === -1) {
      state.eventData.availability[unixtime].push(userID);
    }
  },
  [MutationType.RemoveAvailability](state, content) {
    const { unixtime } = content;
    const userID = state.userID;
    state.eventData.availability[unixtime] = state.eventData.availability[
      unixtime
    ].filter((val: any) => {
      return val !== userID;
    });
  },
  [MutationType.AddUserName](state, content) {
    const { username, id } = content;
    state.eventData.users.push({ id, username });
    state.userID = id;
  },
  [MutationType.RetrieveUserID](state, eventID) {
    state.userID = localStorage.getItem(eventID);
  },
}