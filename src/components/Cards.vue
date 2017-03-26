<template>
  <div class="card">
    <div class="progressive">
      <a :href="article.url" target="_blank">
        <img class="preview" v-progressive="article.urlToImage" :src="article.urlToImage" />
        <!-- <img class="preview"  :src="article.urlToImage" /> -->
      </a>
    </div>
    <h4 class="card-title">
      <a :href="article.url" target="_blank">{{article.title}}</a>
    </h4>
    <h5 class="card-author"><i>by {{article.author}}</i></h5>
    <p class="card-description">{{article.description}}</p>
  </div>
</template>

<script>
import Newslist from './Newslist'

import Vue from 'vue'
import progressive from 'progressive-image/dist/vue'

Vue.use(progressive, {
  removePreview: true
})

export default {
  props: {
   article: {
     type:Object,
     default() {
       return {}
     }
   }
 }
}
</script>

<style lang="sass">
  @mixin clearfix
    clear: both

  .card
    width: 100%
    border: 1px solid lightgray
    border-radius: 10px
    margin-bottom: 10px
    text-align: center
    img
      width: 100%
      padding: 5px
    h5, p
      border-top: 1px solid lightgray
      margin: 0 auto
      padding: 10px 0
</style>
