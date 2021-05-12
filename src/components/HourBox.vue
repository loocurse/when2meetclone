<template>
  <div
    class="hour"
    :class="idx === 0 ? 'first' : ''"
    v-for="hour in day"
    :key="`${hour}`"
    @mousedown="clickHandler"
    @mousemove.prevent="dragHandler"
    :id="hour"
  ></div>
</template>

<script>
export default {
  props: ["day", "hour", "idx"],
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

<style lang="scss" scoped>
.hour {
  width: 100px;
  height: 36px;
  border: solid 0.1px rgb(230, 230, 230);
  background-color: white;
  border-top: none;
  border-left: none;
  /*&:nth-child(2) {
    border-top: solid 0.1px rgb(230, 230, 230);
  }*/
}

.first {
  border-left: solid 0.1px rgb(230, 230, 230) !important;
}

.selected {
  background-color: #33c88e90;
  border: solid 0.1px #33c88e90;
  border-top: none;
  border-left: none;
}
</style>
