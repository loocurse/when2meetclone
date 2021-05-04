<template>
  <div class="calendar">
    <div class="day" v-for="(day, idx) in dateList" :key="`${idx}${day}`">
      <div
        class="hour"
        v-for="(hour, index) in timeList"
        :key="`${index}${hour}`"
        @mousedown="handler"
        @mousemove.prevent="handler2"
        :id="`${day.toDateString()} ${hour.toTimeString()}`"
      ></div>
    </div>
    <button @click="print">Click me</button>
  </div>
</template>

<script>
import CalendarGenerator from "@/utils/CalendarGenerator";

export default {
  setup() {
    let setting = true;
    let timeSelected = [];

    const addEvent = (event) => {
      event.target.classList.add("selected");
      if (timeSelected.indexOf(event.target.id) === -1) {
        timeSelected.push(event.target.id);
      }
    };

    const removeEvent = (event) => {
      event.target.classList.remove("selected");
      timeSelected = timeSelected.filter((val) => {
        return val !== event.target.id;
      });
    };

    const handler = (event) => {
      if (event.target.classList.value.includes("selected")) {
        setting = false;
        removeEvent(event);
      } else {
        setting = true;
        addEvent(event);
      }
    };

    const handler2 = (event) => {
      let mouseClickedDown = event.buttons === 1;
      if (mouseClickedDown) {
        setting ? addEvent(event) : removeEvent(event);
      }
    };
    const print = () => {
      console.log(timeSelected);
    };

    const { dateList, timeList } = CalendarGenerator();

    return { handler, handler2, dateList, timeList, print };
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.label::before {
  content: "9am";
  position: relative;
  left: -50px;
  top: -12.5px;
}

.hour {
  width: 50px;
  height: 20px;
  border: solid 1px black;
}

.hour-label {
  margin: 0px 5px;
}

.selected {
  background-color: rgb(67, 163, 67);
}
</style>
