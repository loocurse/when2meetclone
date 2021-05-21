<template>
  <transition name="fade" appear>
    <div class="backdrop">
      <transition name="modal">
        <div class="signin-form" v-if="show">
          <h1>Sign In</h1>
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <label for="name">Name: </label>
              <input type="text" name="name" v-model="name" />
            </div>
            <!--<div class="row">
          <label for="password">Password (optional):</label>
          <input type="password" name="password" v-model="password" />
        </div>-->
            <div class="row">
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ActionTypes } from "../store/actions";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const name = ref("");
    const show = ref(false);
    const password = ref("");

    setTimeout(function () {
      show.value = true;
    }, 50);
    const handleSubmit = () => {
      store.dispatch(ActionTypes.addUserName, {
        username: name.value,
        eventID: route.params.id,
      });
      name.value = "";
      password.value = "";
    };
    return { name, password, handleSubmit, show };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-weight: normal;
}

.backdrop {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signin-form {
  width: 300px;
  background-color: white;
  padding: 30px 30px;
  border-radius: 10px;
}

h1 {
  font-size: 20px;
  text-align: center;
  width: auto;
  font-weight: bold;
  margin-bottom: 15px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  button {
    padding: 5px 15px;
    border-radius: 30px;
    background-color: #f6c467;
    text-decoration: none;
    border: 0;
    margin: 20px auto;
    margin-bottom: 0;
    cursor: pointer;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 5s ease-in;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease-in;
}



.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
