<template>
  <div class="newslist">
    Newslist
  </div>
</template>

<script>
  export default {
    name: 'newslist',
    props: ['source'],
    methods: {
      updateSource: function (source) {
        this.$http.get('https://newsapi.org/v1/articles?source=' + source + 'apiKey=ac11d5186d284152bd7271c2f707af78')
                  .then(response => {
                    this.articles = response.data.articles;
                  });
      }
    },
    watch: {
      source: function (val) {
        this.updateSource(val);
      }
    }
  }
</script>

<style scoped>

</style>
