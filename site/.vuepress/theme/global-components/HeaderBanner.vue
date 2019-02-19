<template>
  <div class="head-banner" v-if="src" style="position:relative">
    <div class="head-banner-text">
      <h1>{{title}}</h1>
    </div>
    <img
      v-parallax="0.5"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'

Vue.use(VueParallaxJs);

export default {
  name: 'HeaderBanner',
  props: [ 'title', 'src', 'alt' ],
  mounted: function() {
    setTimeout(function() {
      window.scrollTo(0, 5);
      window.scrollTo(0, 0);
    }, 100);
  }
}
</script>

<style lang="scss">
.head-banner {
  height: 70vh;
  overflow: hidden;
  img {
    position: relative;
    z-index: 1;
  }
  .head-banner-text {
    position: absolute;
    height: 100%;
    width: 80%;
    left: 10%;
    display: flex;
    z-index: 2;
    h1 {
      width: 1140px;
      margin: auto;
      color: white;
    }
  }
}
</style>