<template>
<<<<<<< HEAD
  <div id="nav">
    <router-link to="/">About When2meet</router-link>
    <router-link :to="{ name: 'event', params: { id: 123 } }"
      >Plan a New Event</router-link
    >
=======
  <div class="container">
    <div id="nav">
      <div class="first-nav">
        <router-link id="logo" to="/">When2meet</router-link>
        <router-link to="/" class="underline">About When2meet</router-link>
        <router-link to="/" class="underline">How it works</router-link>
      </div>
      <div class="second-nav">
        <router-link :to="{ name: 'newevent' }">Create Event</router-link>
      </div>
    </div>
    <router-view />
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
<<<<<<< HEAD
  font-family: Arial;
}

#nav {
  background-color: black;
  color: #dedede;
  height: 30px;
  display: flex;
  padding: 0 10px;
  a {
    text-decoration: none;
    color: #dedede;
    font-size: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    &:hover {
      background-color: #dedede;
      color: black;
=======
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
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
    }
  }
}
</style>
