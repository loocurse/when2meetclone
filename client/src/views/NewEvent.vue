<template>
  <transition>
    <div class="container">
      <form>
        <div class="row">
          <label for="event-name">Event Name</label>
          <input
            data-test="eventname"
            type="text"
            v-model="name"
            placeholder="Prototype 3 feedback discussion"
          />
        </div>
        <p v-if="error.name">{{ error.name }}</p>
        <div class="row">
          <label for="sdate">Start date</label>
          <input type="date" name="sdate" id="" v-model="sdate" />
        </div>
        <p v-if="error.sdate">{{ error.sdate }}</p>
        <div class="row">
          <label for="edate">End date</label>
          <input type="date" name="edate" id="" v-model="edate" />
        </div>
        <p v-if="error.edate">{{ error.edate }}y</p>
        <div class="row">
          <label for="stime">Start Time</label>
          <input type="time" name="stime" id="" v-model="stime" />
        </div>
        <p v-if="error.stime">{{ error.stime }}</p>
        <div class="row">
          <label for="stime">End Time</label>
          <input type="time" name="etime" id="" v-model="etime" />
        </div>
        <p v-if="error.etime">{{ error.etime }}</p>
      </form>
      <button @click="submitHandler">Submit</button>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { instance } from "../api";

export default {
  data() {
    return {
      name: "",
      sdate: "",
      edate: "",
      stime: "09:00",
      etime: "17:00",
      error: {
        name: "",
        sdate: "",
        edate: "",
        stime: "",
        etime: "",
      },
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
      let eventID;

      const eventDetails = {
        event_name: this.name,
        start_date: this.sdate,
        end_date: this.edate,
        start_time: this.stime,
        end_time: this.etime,
      };
      const formValidation = this.validateForm();
      if (!formValidation) {
        return;
      }
      const postResponse = await instance.post("/add", eventDetails);
      eventID = postResponse.data;

      this.clearForm();

      // redirect user
      // backend endpoint to create new event and get event id
      this.$router.push({ name: "event", params: { id: eventID } });
    },
    validateForm() {
      // validate blanks
      let formStatus = true;
      if (this.name.length === 0) {
        this.error.name = "Event name cannot be empty";
        formStatus = false;
      }
      if (!this.sdate) {
        this.error.sdate = "Start date cannot be empty";
        formStatus = false;
      }
      if (!this.edate) {
        this.error.edate = "End date cannot be empty";
        formStatus = false;
      }
      if (!this.stime) {
        this.error.stime = "Start time cannot be empty";
        formStatus = false;
      }
      if (!this.etime) {
        this.error.etime = "End time cannot be empty";
        formStatus = false;
      }

      // start date cannot be before end date
      const startDate = new Date(this.sdate).getTime();
      const endDate = new Date(this.edate).getTime();
      if (startDate > endDate) {
        this.error.edate = "Start date later than end date";
        formStatus = false;
      }
      // start time cannot be before end time
      if (this.etime.split(":")[0] - this.stime.split(":")[0] < 0) {
        formStatus = false;
        this.error.etime = "Start time later than end time";
      }
      return formStatus;
    },
    clearForm() {
      this.name = "";
      this.sdate = "";
      this.edate = "";
      this.stime = "";
      this.etime = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  color: white;
  margin: 20px auto;
  background-color: #247ba0;
  padding: 30px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    padding: 10px 30px;
    margin-top: 30px;
    color: #494949;
    font-size: 20px;
    border-radius: 30px;
    border: 0;
    background-color: #f6c467;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f7ac21;
      transform: scale(1.02);
    }
  }
}

form {
  p {
    color: red;
  }
  label {
    font-size: 1.5rem;
  }
  input {
    width: 250px;
    padding: 10px 10px;
    border-radius: 15px;
    border: 0;
    font-family: "Poppins", sans-serif;
    &:focus {
      outline: none;
    }
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
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
}

.fade-enter-from {
  transform: translateX(200%);
}
.fade-leave-to {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s linear;
}
</style>
