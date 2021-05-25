<template>
  <transition name="fade" appear>
    <div class="event-deets  drop-shadow">
      <h3>Event Details</h3>
      <table class="detail-list">
        <tr>
          <th>Created On</th>
          <td>{{ $store.getters.getEventDetails.created }}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{{ $store.getters.getEventDetails.author }}</td>
        </tr>
        <tr>
          <th>Participants</th>
          <td>{{ $store.getters.getEventDetails.participants }}</td>
        </tr>
      </table>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.event-deets {
  margin-top: 20px;
  padding: 10px 20px;
  width: 100%;
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
