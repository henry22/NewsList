import Vue from 'vue'

import * as types from '../mutations_type.js'

import axios from 'axios'

const state = {
  newsArticles: []
}

const getters = {
  newsArticles: state => state.newsArticles
}

const mutations = {
  [types.GET_NEWS_ARTICLES](state, article) {
    state.newsArticles = article
  }
}

const actions = {
  getNewsArticles ({commit}, state) {
    return new Promise(resolve =>
      axios.get('https://newsapi.org/v1/articles?source=' + state.id + '&apiKey=ac11d5186d284152bd7271c2f707af78')
        .then(function(res) {
          commit('GET_NEWS_ARTICLES', res.data.articles)
          resolve('ok')
        })
        .catch(function(err) {
          console.log(err)
        })
    )
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
