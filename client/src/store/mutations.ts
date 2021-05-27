import { MutationTree } from "vuex";
import { State, EventData } from "./state";
import { User } from "./state";

export enum MutationType {
  FetchAvailability = "FETCH_AVAILABILITY",
  AddAvailability = "ADD_AVAILABILITY",
  RemoveAvailability = "REMOVE_AVAILABILITY",
  AddUserName = "ADD_USERNAME",
  RetrieveUserID = "RETRIEVE_USERID",
  updateHover = "UPDATE_HOVER",
  removeSelfAvailability = "REMOVE_SELF_AVAILABILITY",
}

export type Mutations = {
  [MutationType.FetchAvailability](state: State, data: EventData): void;
  [MutationType.AddAvailability](
    state: State,
    content: { unixtime: string; eventID: string }
  ): void;
  [MutationType.RemoveAvailability](state: State, content: any): void;
  [MutationType.AddUserName](state: State, user: User): void;
  [MutationType.RetrieveUserID](state: State, content: any): void;
  [MutationType.updateHover](state: State, unixtime: string): void;
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
  [MutationType.AddUserName](state, user) {
    state.eventData.users.push(user);
    state.userID = user.id;
  },
  [MutationType.RetrieveUserID](state, eventID) {
    const userStorage = localStorage.getItem(eventID);
    if (userStorage != null) {
      state.userID = userStorage;
    }
  },
  [MutationType.updateHover](state, unixtime) {
    if (unixtime === "MouseOut") {
      state.currentHover = state.eventData.users.map((user) => user.id);
    } else {
      state.currentHover = state.eventData.availability[unixtime];
    }
  },
  [MutationType.removeSelfAvailability](state) {
    for (const unixtime of Object.keys(state.eventData.availability)) {
      state.eventData.availability[unixtime] = state.eventData.availability[
        unixtime
      ].filter((userid) => userid !== state.userID);
    }
  },
};
