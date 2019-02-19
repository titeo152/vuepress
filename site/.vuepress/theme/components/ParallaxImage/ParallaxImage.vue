
<template>
  <parallax>
    <img :src="{src}" :alt="{alt}" />
  </parallax>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  export default {
    props: ["src", "alt"],
    components: {
      Parallax
    }
  }
</script>