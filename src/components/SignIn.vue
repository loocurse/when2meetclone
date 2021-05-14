<template>
  <div class="backdrop">
    <div class="signin-form">
      <h1>Sign In</h1>
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <label for="name">Name: </label>
          <input type="text" name="name" id="" v-model="name" />
        </div>
        <div class="row">
          <label for="password">Password (optional):</label>
          <input type="password" name="password" id="" v-model="password" />
        </div>
        <div class="row">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup(props, { emit }) {
    const name = ref("");
    const password = ref("");
    const handleSubmit = () => {
      emit("signIn", { name: name.value, password: password.value });
      name.value = "";
      password.value = "";
    };
    return { name, password, handleSubmit };
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
  width: 400px;
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
</style>
