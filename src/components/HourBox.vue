<template>
  <div
    class="hour"
    :class="idx === 0 ? 'first' : ''"
    v-for="(hour, index) in timeList"
    :key="`${index}${hour}`"
    @mousedown="clickHandler"
    @mousemove.prevent="dragHandler"
    :id="`${day.toDateString()} ${hour.toTimeString()}`"
  ></div>
</template>

<script>
export default {
  props: ["day", "hour", "timeList", "idx", "timeSelected"],
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
    return { dragHandler, clickHandler };
  },
};
</script>

<style scoped>
.hour {
  width: 44px;
  height: 36px;
  border: solid 0.1px black;
  background-color: rgb(250, 223, 223);
  border-top: none;
  border-left: none;
}

.day .hour:nth-child(2) {
  border-top: solid 0.1px black;
}

.first {
  border-left: solid 0.1px black;
}

.selected {
  background-color: rgb(67, 163, 67);
}
</style>
