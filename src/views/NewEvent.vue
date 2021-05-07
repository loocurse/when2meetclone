<template>
  <form>
    <div class="row">
      <label for="event-name">Event Name</label>
      <input type="text" v-model="name" />
    </div>
    <div class="row">
      <label for="sdate">Start date</label>
      <input type="date" name="sdate" id="" v-model="sdate" />
    </div>
    <div class="row">
      <label for="edate">End date</label>
      <input type="date" name="edate" id="" v-model="edate" />
    </div>
    <div class="row">
      <label for="stime">Start Time</label>
      <input type="time" name="stime" id="" v-model="stime" />
    </div>
    <div class="row">
      <label for="stime">End Time</label>
      <input type="time" name="etime" id="" v-model="etime" />
    </div>
  </form>
  <button @click="submitHandler">Submit</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      name: "",
      sdate: "",
      edate: "",
      stime: "09:00",
      etime: "17:00",
    };
  },
  mounted() {
    // Set default timings
    let a = new Date();
    const appendZero = (num) => {
      if (String(num).length === 1) {
        return "0" + num;
      }
      return num;
    };
    this.sdate = `${a.getFullYear()}-${appendZero(a.getMonth())}-${appendZero(
      a.getDate()
    )}`;
    a.setDate(a.getDate() + 7);
    this.edate = `${a.getFullYear()}-${appendZero(a.getMonth())}-${appendZero(
      a.getDate()
    )}`;
  },
  methods: {
    submitHandler() {
      // TODO form validation 1. ensure date and time are far away 2. ensure event name is not empty
      // convert datetime

      this.clearForm();
      // redirect user
      // backend endpoint to create new event and get event id
      this.$router.push({ name: "event", params: { id: 100 } });
    },
    clearForm() {
      this.name = "";
      this.sdate = "";
      this.edate = "";
      this.stime = "";
      this.etime = "";
    },
    convertDate(date) {
      let output = new Date();
      const [year, month, day] = date.split("-");
      output.setYear(year);
      output.setMonth(month - 1);
      output.setDate(day);
      return output;
    },
    validateDate() {
      let sdate = this.convertDate(this.sdate);
      let edate = this.convertDate(this.edate);
      return sdate.getTime() - edate.getTime() < 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
