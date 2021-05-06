<template>
  <div class="event-details">
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
  </div>
</template>

<script>
import DisplayCalendar from "../components/DisplayCalendar.vue";
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

    const signIn = ({ name, password }) => {
      console.log(name);
    };

    const signedInBool = ref(false);

    return { id, signIn };
  },
};
</script>

<style lang="scss" scoped>
.event-details {
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
}
</style>
