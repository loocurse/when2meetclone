<template>
  <div class="calendar">
    <!--<div class="labels">
      <div class="hour-label">9:00 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
      <div class="hour-label">9:30 am</div>
    </div>-->
    <div></div>

    <div class="day">
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div
        class="hour"
        @mousedown="handler"
        @mousemove.prevent="handler2"
      ></div>
      <div class="hour" @click="handler" @mousemove="handler2"></div>
      <div class="hour" @click="handler" @mousemove="handler2"></div>
      <div class="hour"></div>
    </div>
    <div class="day">
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
    </div>
    <div class="day">
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
      <div class="hour"></div>
    </div>
  </div>
</template>

<script>
import CalendarGenerator from "@/utils/CalendarGenerator";

export default {
  setup() {
    let setting = true;

    const handler = (event) => {
      if (event.target.classList.value.includes("selected")) {
        setting = false;
      } else {
        setting = true;
      }
      event.target.classList.toggle("selected");
    };

    const handler2 = (event) => {
      if (event.buttons === 1) {
        if (setting) {
          event.target.classList.add("selected");
        } else {
          event.target.classList.remove("selected");
        }
      }
    };

    const data = CalendarGenerator();
    return { handler, handler2, data };
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
