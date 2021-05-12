<template>
  <div class="outer">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="calendar">
      <div class="day" v-for="(day, idx) in dateList" :key="`${idx}${day}`">
        <div class="daylabel">
          <span>{{ day.getDate() }}</span>
          <p>
            {{ Intl.DateTimeFormat("en-US", { weekday: "long" }).format(day) }}
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

<script>
import { CalendarGenerator, monthArray } from "@/utils/CalendarGenerator";
import HourBox from "./HourBox.vue";

export default {
  components: { HourBox },
  setup() {
    let timeSelected = [];
    const { dateList, timeList, dateLabels, timeLabels } = CalendarGenerator(
      "9am",
      "5pm",
      "2020-03-20",
      "2020-03-24"
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
    return {
      dateList,
      timeList,
      dateLabels,
      timeLabels,
      addEvent,
      removeEvent,
      month,
    };
  },
};
</script>

<style lang="scss" scoped>
.outer {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.calendar {
  display: inline-flex;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f7f7f7;
}

.timelabels {
  color: #686868;
  padding-top: 70px;
  padding-bottom: 25px;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  font-size: 12px;
  text-align: right;
  white-space: nowrap;
}

.hour-label {
  margin: 0px 5px;
  display: inline-block;
  width: 50px;
}
.day {
  text-align: center;
}
.daylabel {
  color: #686868;
  top: -35px;
  font-size: 10px;
  text-align: center;
  align-self: center;
  display: inline-block;
  white-space: normal;
  width: 100%;
  margin: 10px 0;
  span {
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 20px;
  }
  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    text-transform: uppercase;
  }
}
</style>
