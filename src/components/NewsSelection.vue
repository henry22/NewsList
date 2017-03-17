<template>
  <div class="newsselection">
    <div class="jumbotron">
      <h2><span class="glyphicon glyphicon-list-alt"></span> News List</h2>
      <h4>Select News source</h4>

      <select class="form-control" @change="selectedSourceChanged">
        <option :value="selectedSource.id" v-for="selectedSource in selectedSources">{{selectedSource.name}}</option>
      </select>

      <div v-if="selectedSource">
        <h6>{{selectedSource.description}}</h6>
        <a :href="selectedSource.url" class="btn btn-primary" target="_blank">Go To {{selectedSource.name}} Website</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    selectedSourceChanged(e) {
      this.$store.dispatch('getSelectedSources', e.target.value)
    }
  },
  computed: {
    ...mapGetters({
      selectedSources: 'selectedSources',
      selectedSource: 'selectedSource'
    })
  },
  created: function() {
    this.$store.dispatch('getNews')
  }
}

</script>

<style scoped>
</style>
