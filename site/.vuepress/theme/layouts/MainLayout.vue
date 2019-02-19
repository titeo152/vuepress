<template>
  <Layout>
    <template slot="page-top">
      <div class="container" v-if="!$page.frontmatter.no_post">
        <div class="row">
          <div class="col-12">
            <Posts />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Posts from '@theme/components/Posts/Posts.vue'
import HeaderBanner from '@theme/global-components/HeaderBanner.vue'
import Layout from '@theme/layouts/Layout.vue'

export default {
  name: 'MainLayout',
  components: {
    Layout,
    Posts
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.scss" lang="scss"></style>
