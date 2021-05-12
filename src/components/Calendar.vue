<template>
  <div class="outer">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="calendar">
      <div class="day" v-for="day in result" :key="day">
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
import { timeLabelGenerator, getLabelTop, splitToChunks } from "../utils";
import HourBox from "./HourBox.vue";

export default {
  components: { HourBox },
  setup(props, { emit }) {
    let timeSelected = [];

    const Data = {
      1618880400: ["lucas"],
      1618884000: ["lucas"],
      1618887600: ["lucas"],
      1618891200: ["lucas"],
      1618894800: ["lucas", "john"],
      1618898400: ["lucas", "john"],
      1618902000: ["lucas", "john"],
      1618905600: ["lucas", "john"],
      1618909200: ["lucas"],
      // new day
      1618966800: ["lucas"],
      1618970400: ["lucas"],
      1618974000: ["lucas"],
      1618977600: ["lucas"],
      1618981200: ["lucas"],
      1618984800: ["lucas"],
      1618988400: ["lucas"],
      1618992000: ["lucas"],
      1618995600: ["lucas"],
      // new day
      1619053200: [],
      1619056800: [],
      1619060400: [],
      1619064000: [],
      1619067600: [],
      1619071200: [],
      1619074800: [],
      1619078400: [],
      1619082000: [],
      // new day
      1619139600: [],
      1619143200: [],
      1619146800: [],
      1619150400: [],
      1619154000: [],
      1619157600: [],
      1619161200: [],
      1619164800: [],
      1619168400: [],
      // new day
      1619226000: [],
      1619229600: [],
      1619233200: [],
      1619236800: [],
      1619240400: [],
      1619244000: [],
      1619247600: [],
      1619251200: [],
      1619254800: [],
      // new day
      1619312400: [],
      1619316000: [],
      1619319600: [],
      1619323200: [],
      1619326800: [],
      1619330400: [],
      1619334000: [],
      1619337600: [],
      1619341200: [],
    };

    const result = splitToChunks(Object.keys(Data), 6);
    const timeLabels = timeLabelGenerator(result[0]);

    const getDate = (unixObject) => {
      const a = new Date(unixObject * 1000);
      return a.getDate();
    };
    const getDay = (unixObject) => {
      const a = new Date(unixObject * 1000);
      return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(a);
    };

    const labelTop = getLabelTop(
      Object.keys(Data)[0],
      Object.keys(Data)[Object.keys(Data).length - 1]
    );

    emit("eventRangeHandler", labelTop); // emit information up to indicate label's date range

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

    return {
      Data,
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
