<template>
  <div class="container">
    <form>
      <div class="row">
        <label for="event-name">Event Name</label>
        <input
          type="text"
          v-model="name"
          placeholder="Prototype 3 feedback discussion"
        />
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
  </div>
</template>

<script>
import axios from "axios";

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
    a.setDate(a.getDate() + 5);
    this.edate = `${a.getFullYear()}-${appendZero(a.getMonth())}-${appendZero(
      a.getDate()
    )}`;
  },
  methods: {
    async submitHandler() {
      // TODO form validation 1. ensure date and time are far away 2. ensure event name is not empty
      // convert datetime
      let eventId;

      const eventDetails = {
        event_name: this.name,
        start_date: this.sdate,
        end_date: this.edate,
        start_time: this.stime,
        end_time: this.etime,
      };
      const postResponse = await axios.post(
        "http://localhost:3000/events/add",
        eventDetails
      );
      eventId = postResponse.data;

      this.clearForm();
      // redirect user
      // backend endpoint to create new event and get event id
      this.$router.push({ name: "event", params: { id: eventId } });
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

<style lang="scss" scoped>
.container {
  font-size: 24px;
  width: 50%;
  color: white;
  margin: 30px auto;
  background-color: #247ba0;
  padding: 50px 100px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    padding: 10px 30px;
    margin-top: 20px;
    color: #494949;
    font-size: 20px;
    border-radius: 30px;
    border: 0;
    background-color: #f6c467;
    cursor: pointer;
  }
}

form {
  input {
    width: 200px;
    padding: 10px 10px;
    font-family: "Poppins", sans-serif;
  }
  width: 80%;
  input[type="text"] {
    &::placeholder {
      color: rgb(194, 194, 194);
    }
  }
}

.row {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
}
</style>
