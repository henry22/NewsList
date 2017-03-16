<template>
  <div class="container" id="app">
    <NewsSelection></NewsSelection>
    <Newslist></Newslist>
  </div>
</template>

<script>
import NewsSelection from './components/NewsSelection'
import Newslist from './components/Newslist'

export default {
  components: {
    NewsSelection,
    Newslist
  }
}
</script>

<style lang="sass">
#app
  padding-top: 20px
</style>
