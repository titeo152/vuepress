<template>
  <div class="posts-list">
    <div class="row">
      <div class="col col-md-4" v-for="(post, i) in paginated" :key="`post-${i}`" style="margin: 15px auto">
        <router-link :to="post.path">
          <div class="card post" :body-style="{ padding: '0px' }">
            <div class="image-wrapper">
              <img
                :src="post.frontmatter.banner || 'https://lorempixel.com/1920/1040/cats/'"
                :alt="post.frontmatter.banner_title || post.frontmatter.title"
                class="image"
              />
              <p :span="8" class="time">
                <span>{{post.frontmatter.date}}</span>
              </p>
            </div>
            <div style="padding: 0 15px;">
              <div class="post-info">
                <h3>{{post.frontmatter.title}}</h3>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row" v-if="totalPage > 1">
      <div class="col-6">
        <button class="btn btn-primary" :disabled="currentPage<=1" @click="prevPage">Prev</button>
      </div>
      <div class="col-6" style="text-align: right">
        <button class="btn btn-primary" :disabled="currentPage>=totalPage" @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { sortPostDate } from '@theme/util';

export default {
  name: 'Posts',
  props: {
    "postType": {
      type: String,
      default: 'posts'
    },
    "limit": {
      type: Number,
      default: 3
    }
  },
  data: function () {
    return {
      totalPage: 1,
      currentPage: 1,
      perPage: 3,
    }
  },
  computed: {
    posts() {
      console.log(this);
      return this.$site.pages.filter(this.checkIsPost);
    },
    paginated() {
      return this.posts.sort(sortPostDate).slice(this.perPage * (this.currentPage - 1), this.perPage * this.currentPage);
    },
    postTypePath() {
      return `${this.$localePath !== '/' ? this.$localePath : '/'}${this.postType.toLowerCase()}/`;
    }
  },
  mounted () {
    this.totalPage = Math.ceil(this.$site.pages.filter(this.checkIsPost).length / 3);
  },
  methods: {
    checkIsPost(pageItem) {
      return pageItem.path.indexOf(this.postTypePath) === 0 && pageItem.frontmatter.type !== 'page';
    },
    nextPage () {
      if (this.currentPage >= this.totalPage) {
        return false;
      }
      this.currentPage = this.currentPage + 1;
    },
    prevPage () {
      if (this.currentPage <= 0) {
        return false;
      }
      this.currentPage = this.currentPage - 1;
    }
  }
}
</script>

<style lang="scss">
.posts-list {
  margin: 0 auto 30px;
  .post {
    .post-info {
      margin: 1.5rem auto;
      overflow: hidden;
    }
    h3 {
      margin: 0;
    }
    .image {
      max-width: 100%;
    }
  }
  .image-wrapper {
    position: relative;
  }
  .time {
    text-align: right;
    position: absolute;
    right: 10px;
    bottom: 0;
    span{
      font-size: 11px;
      background:#f0f0f0;
      padding: 2px 7px;
      border-radius: 3px;
      display: inline-block;
      color: #777;
    }
  }
}
</style>
