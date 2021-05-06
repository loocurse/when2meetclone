<template>
  <div id="nav">
    <router-link to="/">About When2meet</router-link>
    <router-link :to="{ name: 'event', params: { id: 123 } }"
      >Plan a New Event</router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
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
    }
  }
}
</style>
