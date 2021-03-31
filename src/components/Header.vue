<template>
    <div id="home">
      <div class="intro-section">
        <div class="overlay-bg"></div>
        <div style="width: 100%" >
          <video autoplay playsinline muted loop id="myVideo" width="100%">
            <source :src="profile.header" type="video/mp4" v-if="profile.header">
          </video>
        </div>
        <div class="text-intro">
          <h1 class="text1">{{profile.slogan}}</h1>
          <h1 class="text2">#MajuBersamaDesa</h1>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['profile']
}
</script>

<style scoped>
  .overlay-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .15);
  }
  .intro-section{
    position: relative;
  }
  .text-intro{
    position: absolute;
    text-align: center;
    width: 100%;
    top: 25%;
  }
  .text-intro h1{
    font-weight: 700;
    font-size: 3.5rem;
    color: rgba(255,255,255, 0.6);
  }
  @media only screen and (max-width: 600px) {
    .text-intro h1{
      font-size: 2rem;
    }
  }
</style>
