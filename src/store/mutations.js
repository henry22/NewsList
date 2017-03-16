import Vue from 'vue'
import * as types from './mutations_type.js'

export const state = {
  newsSources: [],
  newsSource: '',
  newsArticles: []
}

export const mutations = {
  [types.GET_NEWS](state, sources) {
    state.newsSources = sources
  },
  [types.GET_NEWS_SOURCES](state, source) {
    for(var i = 0; i < state.newsSources.length; i++) {
      if(state.newsSources[i].id == source) {
        state.newsSource = state.newsSources[i]
      }
    }
  },
  [types.GET_NEWS_ARTICLES](state, article) {
    state.newsArticles = article
  }
}
