<template>
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
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup(props, { emit }) {
    const name = ref("");
    const password = ref("");
    const handleSubmit = () => {
      emit("signIn", { name, password });
    };
    return { handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-weight: normal;
}
.signin-form {
  width: 300px;
}

h1 {
  font-size: 16px;
  text-align: center;
  width: auto;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
