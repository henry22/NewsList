// import Vue from 'vue'
// import mutations from './mutations'
//
// import * as types from './mutations_type.js'
//
// import axios from 'axios'

// export const getNews = ({commit}) => {
//   axios.get('https://newsapi.org/v1/sources?language=en')
//     .then(function(res) {
//       commit('GET_NEWS', res.data.sources)
//     })
//     .catch(function(err) {
//       console.log(err)
//     })
// }

// export const getSelectedSources = ({commit}, source) => {
//   commit('GET_NEWS_SOURCES', source)
// }

// export const getNewsArticles = ({commit}, state) => {
//   return new Promise(resolve =>
//     axios.get('https://newsapi.org/v1/articles?source=' + state.id + '&apiKey=ac11d5186d284152bd7271c2f707af78')
//       .then(function(res) {
//         commit('GET_NEWS_ARTICLES', res.data.articles)
//         resolve('ok')
//       })
//       .catch(function(err) {
//         console.log(err)
//       })
//   )
// }
