<template>
  <div class="home">
    <div class="information">
      <span data-test="landing">Bring your <br />team<br />together</span>
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
  </div>
</template>

<script>
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
      font-size: 5.2rem;
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
      transition: all 0.2s ease;
      &:hover {
        background-color: #f7ac21;
        transform: scale(1.02);
      }
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
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(-80%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in;
}
.fade-leave-active {
  transition: all 0.4s linear;
}
</style>
