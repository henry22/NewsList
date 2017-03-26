<template>
  <div class="newslist">
    <div class="container">
      <div v-masonry transition-duration="0.3s" item-selector=".item" origin-left="true">
          <div v-masonry-tile class="item" v-for="newsArticle in newsArticles">
             <Cards :article="newsArticle"></Cards>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import {masonry, masonryTile} from 'vue-masonry'

import Vue from 'vue'
import Cards from './Cards'


export default {
  name: 'newslist',
  watch: {
    'selectedSource': function() {
      //this.updateSource();
      this.getNewsArticles(this.selectedSource)
    }
  },
  // methods: {
  //   updateSource: function() {
  //     this.$store.dispatch('getNewsArticles', this.selectedSource)
  //   }
  // },
  methods: {
    ...mapActions([
      'getNewsArticles'
    ])
  },
  computed: {
    ...mapGetters({
      newsArticles: 'newsArticles',
      selectedSource: 'selectedSource'
    })
  },
  components: {
    Cards
  }
}



</script>

<style lang="sass" scoped>
  .item
    width: 50%
</style>
