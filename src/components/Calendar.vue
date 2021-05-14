<template>
  <div class="outer">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="calendar" v-if="calendarLoaded">
      <div class="day" v-for="(day, idx) in result" :key="day">
        <div class="daylabel">
          <span>{{ getDate(day[0]) }}</span>
          <p>{{ getDay(day[0]) }}</p>
        </div>
        <HourBox
          :day="day"
          :idx="idx"
          :availability="availability"
          @addEvent="addEvent"
          @removeEvent="removeEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import {
  timeLabelGenerator,
  getLabelTop,
  splitToChunks,
  getDate,
  getDay,
} from "../utils";
import HourBox from "./HourBox.vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  components: { HourBox },
  setup(props, { emit }) {
    let calendarLoaded = ref(false);
    let timeSelected = [];
    const route = useRoute();
    let availability = ref();
    let timeLabels = ref([]);
    let result = ref();
    let labelTop = ref();
    let eventName = "";

    const getEventInformation = async () => {
      let eventData = await axios.get(
        "http://localhost:3000/events/" + route.params.id
      );
      availability.value = eventData.data.availability;
      eventName = eventData.data.event_name;
    };

    // when users click and drag, and there is no date already there, this function runs
    const addEvent = (event) => {
      event.target.classList.add("selected");
      if (timeSelected.indexOf(event.target.id) === -1) {
        timeSelected.push(event.target.id);
      }
    };

    // when users click and drag, and there is already an input at this div, this function runs
    const removeEvent = (event) => {
      event.target.classList.remove("selected");
      timeSelected = timeSelected.filter((val) => {
        return val !== event.target.id;
      });
    };

    onMounted(async () => {
      await getEventInformation(); // get event information
      result.value = splitToChunks(Object.keys(availability.value), 6); // split into days
      timeLabels.value = timeLabelGenerator(result.value[0]); // generate the timings
      labelTop = getLabelTop(
        Object.keys(availability.value)[0],
        Object.keys(availability.value)[
          Object.keys(availability.value).length - 1
        ]
      );
      calendarLoaded.value = true;

      emit("eventRangeHandler", { range: labelTop, name: eventName }); // emit information up to indicate label's date range
    });

    return {
      availability,
      calendarLoaded,
      result,
      addEvent,
      getDate,
      getDay,
      timeLabels,
      removeEvent,
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
  flex-direction: row;
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
.hours {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
}
</style>
