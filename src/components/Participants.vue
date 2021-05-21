<template>
  <transition name="fade" appear>
    <div class="participants">
      <h3>Participants</h3>
      <div
        class="participant"
        v-for="participant in participants"
        :key="participant"
      >
        <svg height="14" width="14">
          <circle cx="7" cy="7" r="7" fill="#78DA76" />
        </svg>
        <p>{{ participant.username }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    participants() {
      return this.$store.getters.getParticipantList;
    },
  },
};
</script>

<style lang="scss" scoped>
.participants {
  border-radius: 20px;
  background-color: white;
  width: 200px;
  padding: 10px 20px;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: rgb(99, 99, 99);
    margin-top: 20px;
    margin-left: 10px;
  }
  display: flex;
  flex-direction: column;

  .participant {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 5px;
    p {
      display: inline;
      margin-left: 10px;
      color: rgb(99, 99, 99);
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
