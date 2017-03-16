<template>
  <div class="newsselection">
    <div class="jumbotron">
      <h2><span class="glyphicon glyphicon-list-alt"></span> News List</h2>
      <h4>Select News source</h4>

      <select class="form-control" @change="newsSourceChanged">
        <option :value="newsSource.id" v-for="newsSource in newsSources">{{newsSource.name}}</option>
      </select>

      <div v-if="newsSource">
        <h6>{{newsSource.description}}</h6>
        <a :href="newsSource.url" class="btn btn-primary" target="_blank">Go To {{newsSource.name}} Website</a>
      </div>
      <!-- <ul>
        <li v-for="source in sources">
          {{source}}
        </li>
      </ul>
      <button type="button" @click="sourceChanged('haha')">click me</button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    newsSourceChanged(event) {
      this.$store.dispatch('getNewsSources', event.target.value)
    }
  },
  computed: {
    ...mapGetters({
      newsSources: 'newsSources',
      newsSource: 'newsSource'
    })
    // newsSources() {
    //   return this.$store.getters.newsSources
    // },
    // newsSource() {
    //   return this.$store.getters.newsSource
    // }
  },
  created: function() {
    this.$store.dispatch('getNews')
    // this.$http.get('https://newsapi.org/v1/sources?language=en')
    //           .then(response => {
    //             this.$store.state.sources = response.data.sources;
    //           });
    // axios.get('https://newsapi.org/v1/sources?language=en')
    //   .then(function(res) {
    //   })
    //   .catch(function(err) {
    //     console.log(err)
    //   })
  }
}

</script>

<style scoped>
</style>
