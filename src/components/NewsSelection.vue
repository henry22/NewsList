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
  },
  created: function() {
    this.$store.dispatch('getNews')
  }
}

</script>

<style scoped>
</style>
