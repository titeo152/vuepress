<template>
  <Layout>
    <Container>
      <Content />
    </Container>
  </Layout>
</template>

<script>
import Vue from 'vue';
import HeaderBanner from '@theme/global-components/HeaderBanner.vue'
import Layout from "@theme/layouts/Layout.vue";
import Container from '@theme/components/Container/Container.vue'

export default {
  name: 'MainLayout',
  components: {
    Layout,
    HeaderBanner,
  }
}
</script>

<style src="../styles/theme.scss" lang="scss"></style>