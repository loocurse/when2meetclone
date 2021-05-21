<template>
  <transition name="fade" appear>
    <div class="event-deets">
      <h3>Event Details</h3>
      <table class="detail-list">
        <tr>
          <th>Created On</th>
          <td>{{ dateParser }}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{{ details.author }}</td>
        </tr>
        <tr>
          <th>Participants</th>
          <td>{{ details.participants }}</td>
        </tr>
      </table>
    </div>
  </transition>
</template>

<script>
import { getMonths } from "../utils";
export default {
  data() {
    return {
      details: {
        created: new Date(),
        author: "John Lim",
        participants: 3,
      },
    };
  },
  computed: {
    dateParser() {
      let date = this.details.created;
      let monthNames = getMonths();

      return `${date.getDate()} ${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.event-deets {
  margin-top: 20px;
  padding: 10px 20px;
  width: 200px;
  border-radius: 20px;
  background-color: white;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: rgb(99, 99, 99);
    margin-top: 20px;
    margin-left: 10px;
  }
}
.detail-list {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  tr {
    color: rgb(99, 99, 99);
    font-size: 12px;
    th {
      font-weight: normal;
      text-transform: uppercase;
      text-align: left;
    }
    td {
      text-align: right;
    }
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-in;
}
</style>
