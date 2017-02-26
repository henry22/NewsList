<template>
  <div class="sourceselection">
    <h4>Select News source</h4>
    <select class="form-control" v-on:change="sourceChanged">
      <option v-bind:value="source.id" v-for="source in sources">{{source.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'sourceselection',
  data () {
    return {
      sources: [],
      source: ''
    }
  },
  methods: {
    sourceChanged: function (event) {
      for (var i=0; i<this.sources.length; i++) {
        if (this.sources[i] == event.target.value) {
          this.source = this.sources[i]
        }
      }
    }
  },
  created: function() {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
              .then(response => {
                this.sources = response.data.sources
              });
  }
}
</script>

<style scoped>
</style>
