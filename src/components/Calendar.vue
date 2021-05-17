<template>
  <div class="outer">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="calendar">
      <div class="day" v-for="(day, idx) in result" :key="day">
        <div class="daylabel">
          <span>{{ getDate(day[0]) }}</span>
          <p>{{ getDay(day[0]) }}</p>
        </div>
        <HourBox
          :day="day"
          :idx="idx"
          @addEvent="addEvent"
          @removeEvent="removeEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import { getDate, getDay } from "../utils";
import HourBox from "./HourBox.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { HourBox },
  props: ["userName"],
  setup(props, { emit }) {
    const route = useRoute();
    const store = useStore();

    // when users click and drag, and there is no date already there, this function runs
    const addEvent = (event) => {
      event.target.classList.add("selected");
      let unixtime = event.target.id;
      //if (availability.value[unixtime].indexOf(userName.value) === -1) {
      //  availability.value[unixtime].push(userName.value);
      //}
    };

    // when users click and drag, and there is already an input at this div, this function runs
    const removeEvent = (event) => {
      event.target.classList.remove("selected");
      let unixtime = event.target.id;
      //availability.value[unixtime] = availability.value[unixtime].filter(
      //  (val) => {
      //    return val !== userName.value;
      //  }
      //);
    };
    store.dispatch("fetchAvailabilities");

    //onMounted(async () => {
    //  //await getEventInformation(); // get event information
    //  availability.value = store.getters.getAvailability;
    //  result.value = store.getters.getSplitAvailabilities;
    //  timeLabels.value = timeLabelGenerator(result.value[0]); // generate the timings
    //  labelTop = getLabelTop(
    //    Object.keys(availability.value)[0],
    //    Object.keys(availability.value)[
    //      Object.keys(availability.value).length - 1
    //    ]
    //  );
    //  calendarLoaded.value = true;

    //});

    return {
      availability: computed(() => store.getters.getAvailability),
      result: computed(() => store.getters.getSplitAvailabilities),
      addEvent,
      getDate,
      getDay,
      timeLabels: computed(() => store.getters.getTimeLabels),
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
  margin-right: 10px;
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
