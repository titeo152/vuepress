<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    max-width: 475px;
  }
  @media screen and (max-width: 475px) {
    max-width: 100%;
  }
}
</style>
