<template>
  <div class="outer">
    <div class="calendar">
      <div class="timelabels">
        <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
      </div>
      <div class="day" v-for="(day, idx) in dateList" :key="`${idx}${day}`">
        <div class="daylabel">
          <span>{{ month[day.getMonth()] }} {{ day.getDate() }}</span>
          <p>
            {{ Intl.DateTimeFormat("en-US", { weekday: "short" }).format(day) }}
          </p>
        </div>
        <HourBox
          :day="day"
          :timeList="timeList"
          :idx="idx"
          :timeSelected="timeSelected"
          @addEvent="addEvent"
          @removeEvent="removeEvent"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarGenerator, monthArray } from "@/utils/CalendarGenerator";
import HourBox from "./HourBox.vue";

let timeSelected = [];
const { dateList, timeList, dateLabels, timeLabels } = CalendarGenerator(
  "9am",
  "5pm",
  "2020-03-20",
  "2020-03-27"
);

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

const month = monthArray();
</script>

<style scoped>
.outer {
  position: relative;
  /*overflow: scroll;*/
}
.calendar {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  margin-top: 35px;
  overflow-x: scroll;
  overflow-y: visible;
}

.timelabels {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 0.5rem;
  font-size: 10px;
  text-align: right;
  position: relative;
  top: 30px;
  white-space: nowrap;
}

.hour-label {
  margin: 0px 5px;
  display: inline-block;
  width: 50px;
}

.daylabel {
  top: -35px;
  font-size: 10px;
  text-align: center;
  align-self: center;
  display: inline-block;
  white-space: normal;
}

.daylabel span {
  overflow-x: scroll;
  white-space: nowrap;
}
.daylabel p {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
</style>
