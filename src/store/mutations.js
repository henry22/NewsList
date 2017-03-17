import Vue from 'vue'
import * as types from './mutations_type.js'

export const state = {
  selectedSources: [],
  selectedSource: '',
  newsArticles: []
}

export const mutations = {
  [types.GET_NEWS](state, sources) {
    state.selectedSources = sources
  },
  [types.GET_NEWS_SOURCES](state, source) {
    console.log(source)
    for(var i = 0; i < state.selectedSources.length; i++) {
      if(state.selectedSources[i].id == source) {
        state.selectedSource = state.selectedSources[i]
      }
    }
  },
  [types.GET_NEWS_ARTICLES](state, article) {
    state.newsArticles = article
  }
}
