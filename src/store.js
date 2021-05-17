import { createStore } from "vuex";
import { instance } from "./api";
import {
  timeLabelGenerator,
  getLabelTop,
  splitToChunks,
  getDate,
  getDay,
} from "./utils";
import { isEmpty, isNil } from "lodash";

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
    async fetchAvailabilities({ commit }, id) {
      const response = await instance.get("60a09733d643c48ee7352d2e");
      commit("FETCH_AVAILABILITY", response.data);
    },
    addEvent({ commit }, id) {
      commit("ADD_AVAILABILITY", event);
    },
    removeEvent({ commit }, id) {
      commit("REMOVE_AVAILABILITY", event);
    },
  },
  getters: {
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
      const output = splitToChunks(state.eventData.availability, 6);
      console.log(output);
      return output;
    },
    getEventName(state) {
      return state.eventData.event_name;
    },
    getTimeLabels(state, getters) {
      if (isEmpty(state.eventData)) {
        return [];
      }
      return timeLabelGenerator(getters.getSplitAvailabilities[0]);
    },
    getTopLabel(state, getters) {
      const avail = state.eventData.availability;
      if (isNil(avail)) {
        return;
      }
      return getLabelTop(
        Object.keys(avail)[0],
        Object.keys(avail)[Object.keys(avail).length - 1]
      );
    },
  },
});
