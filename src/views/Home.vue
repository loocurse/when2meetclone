<template>
  <div class="home">
<<<<<<< HEAD
    <img alt="Vue logo" src="../assets/logo.png" />
=======
    <div class="information">
      <span>Bring your <br />team<br />together</span>
      <router-link :to="{ name: 'newevent' }">Get Started</router-link>
    </div>

    <lottie-player
      id="lottie"
      src="https://assets6.lottiefiles.com/packages/lf20_pyawb2b1.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
  </div>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src

=======
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 500px;
  .information {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    span {
      font-size: 80px;
      font-weight: bold;
      line-height: 1.2;
    }
    a {
      color: #494949;
      margin-top: 30px;
      padding: 10px 10px;
      width: 200px;
      font-size: 20px;
      border-radius: 30px;
      border: 0;
      background-color: #f6c467;
      text-decoration: none;
      text-align: center;
    }
  }

  #lottie {
    position: absolute;
    z-index: 0;
    left: 100%;
    top: 50%;
    transform: translate(-100%, -50%);
    width: 600px;
    height: 600px;
  }
}
</style>
