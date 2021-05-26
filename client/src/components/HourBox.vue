<template>
  <div
    class="hour"
    :style="styleBinding(availability[hour])"
    :class="[
      idx === 0 ? 'first' : '',
      availability[hour].includes(userID) ? 'selected' : '',
    ]"
    v-for="hour in day"
    :key="hour"
    @mousedown="clickHandler"
    @mousemove.prevent="dragHandler"
    @mouseover="hoverHandler"
    @mouseout="mouseoutHandler"
    :id="hour"
  ></div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ActionTypes } from "../store/actions";

export default {
  props: { day: Array, idx: Number },
  setup() {
    let action = "ADD";
    const store = useStore();
    const route = useRoute();
    const userID = store.state.userID;

    const hoverHandler = (event) => {
      store.dispatch(ActionTypes.updateHover, event.target.id);
    };

    const mouseoutHandler = () => {
      store.dispatch(ActionTypes.updateHover, "MouseOut");
    };

    const clickHandler = (event) => {
      event.target.classList.value.includes("selected")
        ? (action = "REMOVE")
        : (action = "ADD");
      UPDATE_AVAILABILITY(action, event);
    };

    const dragHandler = (event) => {
      let mouseClickedDown = event.buttons === 1;
      if (mouseClickedDown) {
        UPDATE_AVAILABILITY(action, event);
      }
    };

    const UPDATE_AVAILABILITY = (action, event) => {
      let unixtime = event.target.id;
      if (action === "ADD") {
        event.target.classList.add("selected");
        store.dispatch(ActionTypes.addEvent, {
          unixtime,
          eventID: route.params.id,
        });
      } else if (action === "REMOVE") {
        event.target.classList.remove("selected");
        store.dispatch(ActionTypes.removeEvent, {
          unixtime,
          eventID: route.params.id,
        });
      }
      store.dispatch(ActionTypes.updateDatabase);
    };

    const styleBinding = (arr) => {
      const degree = arr.length;
      return {
        "background-color": `hsl(157, 59%, ${100 - degree * 10}%)`,
        border:
          degree === 0 ? "" : `solid 0.1px hsl(157, 59%, ${90 - degree * 10}%)`,
        "border-top": "none",
        "border-left": "none",
      };
    };
    const styleBindingUser = (arr) => {
      const users = arr.filter((id) => id === store.state.userID);
      const degree = users.length;
      return {
        "background-color": `hsl(157, 59%, ${100 - degree * 10}%)`,
        border:
          degree === 0 ? "" : `solid 0.1px hsl(157, 59%, ${90 - degree * 10}%)`,
        "border-top": "none",
        "border-left": "none",
      };
    };

    return {
      dragHandler,
      styleBindingUser,
      clickHandler,
      hoverHandler,
      mouseoutHandler,
      styleBinding,
      availability: computed(() => store.getters.getAvailability),
      userID,
    };
  },
};
</script>

<style lang="scss" scoped>
.hour {
  width: 7rem;
  height: 36px;
  border: solid 0.1px rgb(230, 230, 230);
  background-color: white;
  border-top: none;
  border-left: none;
  &:nth-child(2) {
    border-top: solid 0.1px rgb(230, 230, 230) !important;
  }
}

.first {
  border-left: solid 0.1px rgb(230, 230, 230) !important;
}
</style>
