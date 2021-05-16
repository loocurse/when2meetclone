import { createStore } from "vuex";
import { instance } from "./api";
import {
  timeLabelGenerator,
  getLabelTop,
  splitToChunks,
  getDate,
  getDay,
} from "./utils";

export default createStore({
  state() {
    return {
      eventData: {},
    };
  },
  mutations: {
    FETCH_AVAILABILITY(state, data) {
      state.eventData = data;
    },
    ADD_AVAILABILITY(state, content) {
      const { user, unixtime } = content;
      state.eventData.availability[unixtime].push(user);
    },
    REMOVE_AVAILABILITY(state, content) {
      const { user, unixtime } = content;
      state.eventData.availability[unixtime].push(user);
      state.eventData.availability.value[
        unixtime
      ] = state.eventData.availability.value[unixtime].filter((val) => {
        return val !== user;
      });
    },
  },
  actions: {
    fetchAvailabilities({ commit }, id) {
      instance
        .get("60a09733d643c48ee7352d2e")
        .then((res) => commit("FETCH_AVAILABILITY", res.data));
    },
  },
  getters: {
    getEventData(state) {
      console.log(state.eventData);
      return state.eventData;
    },
    getSplitAvailabilities(state) {
      return;
    },
    getEventName(state) {
      return state.eventData.event_name;
    },
  },
});
