<template>
  <div class="event-details">
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
  </div>
</template>

<script>
import DisplayCalendar from "../components/DisplayCalendar.vue";
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

    const signIn = ({ name, password }) => {
      console.log(name);
    };

    const signedInBool = ref(false);
    const eventName = getEventName(route.params.id);

    return { eventName, signIn };
  },
};
</script>

<style lang="scss" scoped>
.event-details {
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
}
</style>
