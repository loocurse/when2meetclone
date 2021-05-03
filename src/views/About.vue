<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <Calendar />
  </div>
</template>

<script>
import Calendar from "../components/Calendar.vue";
import CalendarGenerator from "../utils/CalendarGenerator";

export default {
  components: { Calendar },
  setup() {
    CalendarGenerator();
  },
};
</script>
