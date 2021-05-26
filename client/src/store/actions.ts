import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";
import { instance } from "../api";

export enum ActionTypes {
  loadAvailabilities = "LOAD_AVAILABILITIES",
  addEvent = "ADD_EVENT",
  removeEvent = "REMOVE_EVENT",
  updateDatabase = "UPDATE_DATABASE",
  addUserName = "ADD_USERNAME",
  updateHover = "UPDATE_HOVER",
  removeSelfAvailability = "REMOVE_SELF_AVAILABILITY",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};
export type Actions = {
  [ActionTypes.loadAvailabilities](context: ActionAugments, eventID: any): void;
  [ActionTypes.addEvent](
    context: ActionAugments,
    payload: { unixtime: string; eventID: string }
  ): void;
  [ActionTypes.removeEvent](
    context: ActionAugments,
    payload: { unixtime: string; eventID: string }
  ): void;
  [ActionTypes.updateDatabase](context: ActionAugments): void;
  [ActionTypes.addUserName](context: ActionAugments, payload: any): void;
  [ActionTypes.updateHover](context: ActionAugments, unixtime: string): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.loadAvailabilities]({ commit }, eventID) {
    const response = await instance.get(eventID);
    commit(MutationType.FetchAvailability, response.data);
    commit(MutationType.RetrieveUserID, response.data._id);
  },
  [ActionTypes.addEvent]({ commit }, payload) {
    commit(MutationType.AddAvailability, payload);
  },
  [ActionTypes.removeEvent]({ commit }, payload) {
    commit(MutationType.RemoveAvailability, payload);
  },
  async [ActionTypes.updateDatabase]({ state }) {
    await instance.put(`/${state.eventData._id}/update`, {
      availability: state.eventData.availability,
    });
  },
  async [ActionTypes.addUserName]({ commit }, { username, eventID }) {
    // add user entry to database
    const response = await instance.put(`/${eventID}/adduser`, {
      user: username,
    });
    // update local storage
    localStorage.setItem(eventID, response.data.id);
    commit(MutationType.AddUserName, { name: username, id: response.data.id });
  },
  [ActionTypes.updateHover]({ commit }, unixtime) {
    commit(MutationType.updateHover, unixtime);
  },
  async [ActionTypes.removeSelfAvailability]({ commit, dispatch }) {
    commit(MutationType.removeSelfAvailability);
    dispatch("UPDATE_DATABASE");
  },
};
