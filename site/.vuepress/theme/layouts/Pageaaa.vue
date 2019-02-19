<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Navbar
      v-if="shouldShowNavbar"
    />

    <p>Page</p>

    <HeaderBanner
      :title="$page.frontmatter.title"
      :src="$page.frontmatter.banner"
      :alt="$page.frontmatter.banner_title || $page.frontmatter.title"
      style="position:relative"
    />

    <div class="container">
      <div class="row">
        <div class="col-12">
          <Content />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Navbar from '@theme/components/Nav/Navbar.vue'

export default {
  components: {
    Navbar,
  },

  data () {
    return {
      swUpdateEvent: null
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
        },
        userPageClass
      ]
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)
    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })

    this.$on('sw-updated', this.onSWUpdated)
  },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.scss" lang="scss"></style>
