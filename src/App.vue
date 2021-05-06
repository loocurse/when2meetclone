<template>
  <div id="nav">
    <router-link to="/">About When2meet</router-link>
    <router-link to="/about">Plan a New Event</router-link>
  </div>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
  font-family: Arial;
  padding: 0;
  margin: 0;
}

#nav {
  background-color: black;
  color: #dedede;
  height: 30px;
  display: flex;
  padding: 0 10px;
}
a {
  text-decoration: none;
  color: #dedede;
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

a:hover {
  background-color: #dedede;
  color: black;
}
</style>
