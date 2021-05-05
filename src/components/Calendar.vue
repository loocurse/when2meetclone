<template>
  <div class="calendar">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="day" v-for="(day, idx) in dateList" :key="`${idx}${day}`">
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
</template>

<script>
import CalendarGenerator from "@/utils/CalendarGenerator";
import HourBox from "./HourBox.vue";

export default {
  components: { HourBox },
  setup() {
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

    return {
      addEvent,
      removeEvent,
      dateList,
      timeList,
      dateLabels,
      timeLabels,
      timeSelected,
    };
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
}

.label::before {
  content: "9am";
  position: relative;
  left: -50px;
  top: -12.5px;
}

.timelabels {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 0.5rem;
  font-size: 0.6rem;
  text-align: right;
  position: relative;
  top: -5px;
}

.hour-label {
  margin: 0px 5px;
}
</style>
