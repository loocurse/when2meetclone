<template>
  <div class="container">
    <div id="nav">
      <div class="first-nav">
        <router-link id="logo" to="/">When2meet</router-link>
        <router-link to="/" class="underline">About When2meet</router-link>
        <router-link to="/" class="underline">How it works</router-link>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
html,
body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  background-color: #f6f7f9;
}
.container {
  width: 80%;
  margin: 0 auto;
}

.background {
  position: sticky;
  height: 100vh;
  z-index: -100;
  background-color: blue;
}

#nav {
  position: relative;
  z-index: 1;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  a {
    color: #494949;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }

  #logo {
    margin-left: 0;
    margin-right: 20px;
    color: black;
    font-size: 36px;
    font-family: "Shrikhand", cursive;
    text-decoration: none;
  }

  .second-nav {
    a {
      padding: 5px 15px;
      border-radius: 30px;
      background-color: #f6c467;
      text-decoration: none;
      transition: 0.2s ease-in;
      &:hover {
        background-color: #f7ac21;
      }
    }
  }
}

.drop-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
}
</style>
