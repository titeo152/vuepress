<template>
  <div class="container" v-if="!$page.frontmatter.no_post">
    <div class="row">
      <div class="col-12">
        <Posts />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Posts from '@theme/components/Posts/Posts.vue'

export default {
  name: 'MainLayout',
  components: {
    Posts
  }
}
</script>
