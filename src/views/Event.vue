<template>
  <div class="event-details">
    <h1>{{ id }}</h1>
    <p>
      To invite people to this event, you can <a>email them</a>, send them
      a <a>Facebook message</a>, or just direct them to
      {{ fullLink }}
    </p>
    <span>Your Time Zone: </span>
    <select name="timezone" id="timezone">
      <option value="123">Asia/Singapore</option>
      <option value="1233">1233</option>
      <option value="12333">12333</option>
      <option value="123333">123333</option>
    </select>
  </div>
  <Calendar />
</template>

<script>
import Calendar from "../components/Calendar.vue";
import { useRoute } from "vue-router";

export default {
  components: { Calendar },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    return { id };
  },
  computed: {
    fullLink() {
      return `https://www.when2meet.com/${this.id}`;
    },
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
</style>
