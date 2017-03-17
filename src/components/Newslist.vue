<template>
  <div class="newslist">
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="newsArticle in newsArticles">
          <div class="media-left">
            <a :href="newsArticle.url" target="_blank">
              <img class="media-object" :src="newsArticle.urlToImage">
            </a>
          </div>

          <div class="media-body">
            <h4 class="media-heading">
              <a :href="newsArticle.url" target="_blank">{{newsArticle.title}}</a>
            </h4>
            <h5><i>by {{newsArticle.author}}</i></h5>
            <p>{{newsArticle.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'newslist',
  watch: {
    'selectedSource': function() {
      this.updateSource();
    }
  },
  methods: {
    // ...mapActions([
    //   'updateSource'
    // ])
    updateSource: function() {
      this.$store.dispatch('getNewsArticles', this.selectedSource)
    }
  },
  computed: {
    ...mapGetters({
      newsArticles: 'newsArticles',
      selectedSource: 'selectedSource'
    })
  }
}
</script>

<style lang="sass" scoped>
.media-object
  width: 128px
  padding: 10px

.media
  border-top: 1px solid lightgrey
  padding-top: 20px
</style>
