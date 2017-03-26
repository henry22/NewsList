import Vue from 'vue'
import Vuex from 'vuex'
//import { state, mutations } from './mutations.js'
//import * as getters from './getters.js'
//import * as actions from './actions.js'

import news_source from './modules/news_source.js'
import article from './modules/article.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // state,
  // mutations,
  // getters,
  // actions,
  modules: {
    news_source,
    article
  },
  strict: true
})
