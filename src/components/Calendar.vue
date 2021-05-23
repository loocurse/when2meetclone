<template>
  <!--<transition name="fade" appear>-->
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
        <HourBox :day="day" :idx="idx" />
      </div>
    </div>
  </div>
  <!--</transition>-->
</template>

<script>
import { ActionTypes } from "@/store/actions";
import { getDate, getDay } from "../utils";
import HourBox from "./HourBox.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, toRefs } from "vue";

export default {
  components: { HourBox },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();
    const { page } = toRefs(props);

    store.dispatch(ActionTypes.loadAvailabilities, route.params.id);

    return {
      availability: computed(() => store.getters.getAvailability),
      result: computed(() => store.getters.getSplitAvailabilities[page.value]),
      getDate,
      getDay,
      timeLabels: computed(() => store.getters.getTimeLabels),
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
  margin-right: 30px;
}

.timelabels {
  color: #686868;
  padding-top: 80px;
  padding-bottom: 25px;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  span {
    font-size: 0.8rem;
  }

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
  text-align: center;
  align-self: center;
  display: inline-block;
  white-space: normal;
  width: 100%;
  margin: 10px 0;
  span {
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 3s linear;
}
</style>
