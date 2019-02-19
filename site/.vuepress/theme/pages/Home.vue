<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="news-block">
            <h2>News</h2>
            <Posts />
          </div>
          <div class="docs-block">
            <h2>Documents</h2>
            <Posts postType="docs" />
          </div>
          <Content custom/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBanner from '@theme/global-components/HeaderBanner.vue'
import Posts from '@theme/components/Posts/Posts.vue'

export default {
  name: 'Home',
  components: {
    HeaderBanner,
    Posts
  }
}
</script>

<style>
.news-block, .docs-block {
  margin-top: 40px;
}
</style>
