<template>
  <div
    class="hour"
    :style="styleBinding(availability[hour].length, idx)"
    :class="idx === 0 ? 'first' : ''"
    v-for="hour in day"
    :key="hour"
    @mousedown="clickHandler"
    @mousemove.prevent="dragHandler"
    :id="hour"
  ></div>
</template>

<script>
export default {
  props: ["day", "idx", "availability"],
  setup(props, { emit }) {
    let setting = true;

    const clickHandler = (event) => {
      if (event.target.classList.value.includes("selected")) {
        setting = false;
        emit("removeEvent", event);
      } else {
        setting = true;
        emit("addEvent", event);
      }
    };

    const dragHandler = (event) => {
      let mouseClickedDown = event.buttons === 1;
      if (mouseClickedDown) {
        setting ? emit("addEvent", event) : emit("removeEvent", event);
      }
    };

    const styleBinding = (degree) => {
      return {
        "background-color": `hsl(157, 59%, ${100 - degree * 10}%)`,
        border: degree === 0 ? "" : `solid 0.1px hsl(157, 59%, ${80}%)`,
        "border-top": "none",
        "border-left": "none",
      };
      //if (degree === 0) {
      //  return {
      //    "background-color": `hsl(157, 59%, 100%)`,
      //    //border: "solid 0.1px hsl(157, 59%, 60%)",
      //    "border-top": "none",
      //    "border-left": "none",
      //  };
      //} else if (degree === 1) {
      //  return {
      //    "background-color": `hsl(157, 59%, 90%)`,
      //    border: "solid 0.1px hsl(157, 59%, 60%)",
      //    "border-top": "none",
      //    "border-left": "none",
      //  };
      //} else if (degree === 2) {
      //  return {
      //    "background-color": `hsl(157, 59%, 80%)`,
      //    border: "solid 0.1px hsl(157, 59%, 60%)",
      //    "border-top": "none",
      //    "border-left": "none",
      //  };
      //} else {
      //  return;
      //}
    };

    return { dragHandler, clickHandler, styleBinding };
  },
};
</script>

<style lang="scss" scoped>
.hour {
  width: 100px;
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

.selected {
  background-color: hsl(157, 59%, 50%);
  border: solid 0.1px hsl(157, 59%, 70%);
  border-top: none;
  border-left: none;
}
</style>
