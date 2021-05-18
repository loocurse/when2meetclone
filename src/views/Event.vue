<template>
  <SignIn v-show="usernameExist" />
  <div class="event-details">
    <h1>{{ eventName }}</h1>
    <div class="date-chooser">
      <div class="left"><i class="fas fa-angle-left"></i></div>
      <p>{{ eventRange }}</p>
      <div class="right"><i class="fas fa-angle-right"></i></div>
    </div>
  </div>

  <div class="content">
    <Calendar :userName="userName" />
    <div class="right-information">
      <Participants />
      <EventDetails />
    </div>
  </div>
</template>

<script>
import Calendar from "../components/Calendar.vue";
import Participants from "../components/Participants";
import EventDetails from "../components/EventDetails";
import SignIn from "../components/SignIn.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  emits: ["signIn"],
  components: {
    Calendar,
    Participants,
    EventDetails,
    SignIn,
  },
  setup() {
    const store = useStore();

    return {
      eventRange: computed(() => store.getters.getTop),
      userName: computed(() => store.state.userName),
      eventName: computed(() => store.getters.getEventName),
      usernameExist: computed(() => store.getters.usernameExist),
    };
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
