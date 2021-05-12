<template>
  <div class="event-details">
<<<<<<< HEAD
    <h1>{{ id }}</h1>
    <p>
      To invite people to this event, you can <a>email them</a>, send them a
      <a>Facebook message</a>, or just direct them to
      {{ `https://www.when2meet.com/${id}` }}
    </p>
    <span>Your Time Zone: </span>
    <select name="timezone" id="timezone">
      <option value="Asia/Singapore">Asia/Singapore</option>
      <option value="Asia/HongKong">Asia/HongKong</option>
      <option value="Asia/Australia">Asia/Australia</option>
      <option value="Asia/Maldives">Asia/Maldives</option>
    </select>
  </div>
  <div class="content">
    <SignIn @signIn="signIn" />
    <DisplayCalendar />
=======
    <h1>{{ eventName }}</h1>
    <div class="date-chooser">
      <div class="left"><i class="fas fa-angle-left"></i></div>
      <p>15 May - 23 May</p>
      <div class="right"><i class="fas fa-angle-right"></i></div>
    </div>
  </div>

  <div class="content">
    <DisplayCalendar />
    <div class="right-information">
      <Participants />
      <EventDetails />
    </div>
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
  </div>
</template>

<script>
import DisplayCalendar from "../components/DisplayCalendar.vue";
<<<<<<< HEAD
import { useRoute } from "vue-router";
import SignIn from "../components/SignIn.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    DisplayCalendar,
    SignIn,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
=======
import Participants from "../components/Participants";
import EventDetails from "../components/EventDetails";
import { useRoute } from "vue-router";
import SignIn from "../components/SignIn.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    DisplayCalendar,
    Participants,
    EventDetails,
  },
  setup() {
    const route = useRoute();

    const getEventName = (id) => {
      return "Project Meeting";
    };
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2

    const signIn = ({ name, password }) => {
      console.log(name);
    };

    const signedInBool = ref(false);
<<<<<<< HEAD

    return { id, signIn };
=======
    const eventName = getEventName(route.params.id);

    return { eventName, signIn };
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
  },
};
</script>

<style lang="scss" scoped>
.event-details {
<<<<<<< HEAD
  padding: 20px;
  font-weight: 300;
  h1 {
    font-size: 30px;
    font-weight: normal;
  }
  p {
    a {
      color: blue;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  p,
  span {
    padding-top: 12px;
    font-size: 12px;
  }
  span {
    display: inline-block;
    height: 12px;
  }
  #timezone {
    width: 237px;
  }
}
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
=======
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  h1 {
    text-transform: uppercase;
    font-size: 24px;
    margin-right: 40px;
  }
  .date-chooser {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: rgb(99, 99, 99);
    p {
      padding: 0 20px;
      font-size: 20px;
    }
    .left,
    .right {
      cursor: pointer;
    }
  }
}
.content {
  display: flex;
  justify-content: space-between;
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
}
</style>
