import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {

    backEnd: "https://api-blog-node.herokuapp.com/api/v1/",
    // backEnd: "http://localhost:3000/api/v1/",

    connected: false,

    jwt: undefined,

    currentUser: undefined,

    articles: undefined,

    user: undefined,

    article: {
      _id: 0,
      title: "un titre",
      content: "le contenu",
      author: {},
    },

  },

  mutations: {

      LOAD_ARTICLE(state, payload) {
        state.article = payload;
      },

      LOAD_ARTICLES(state, payload) {
        state.articles = payload;
      },

      LOAD_CURRENT_USER(state, payload) {
        state.currentUser = payload;
      },

      LOAD_JWT(state, payload) {
        state.jwt = payload;
      },

      RESET_JWT(state) {
        state.jwt = undefined;
      },

      RESET_CURRENT_USER(state) {
        state.currentUser = undefined;
      }

  },

  actions: {

      fetchArticle({ commit }, idArticle) {
        Vue.axios.get( this.state.backEnd + "article/" + idArticle )
        .then( (response) => {
          commit('LOAD_ARTICLE', response.data.data.article);
          return true;
        })
        .catch(error => {
          console.log(error)
          return false;
        });
      },

      fetchArticles({ commit }) {
        Vue.axios.get( this.state.backEnd + "article" )
        .then( (response) => {
          commit('LOAD_ARTICLES', response.data.data.article);
          return true;
        })
        .catch(error => {
          console.log(error)
          return false;
        });
      },

      fetchCurrentUser({ commit }) {
        const axiosConfig = {
          headers: {
            'Authorization': 'Bearer ' + this.state.jwt,
          }
        };
        Vue.axios.get( this.state.backEnd + "user/currentuser", axiosConfig )
        .then( (response) => {
          commit('LOAD_CURRENT_USER', response.data.data.user )
          return true;
        })
        .catch(error => {
          console.log(error)
          return false;
        });
      },

      login({commit, dispatch }, payload) {
        Vue.axios.post( this.state.backEnd + "auth/login", payload )
        .then( (response) => {
          console.log(response);
          commit('LOAD_JWT', response.data.jwt);
          dispatch('fetchCurrentUser');
          return true;
        })
        .catch(error => {
          console.log(error);
          return false;
        });
      },

      logout({ commit }) {
        commit('RESET_JWT');
        commit('RESET_CURRENT_USER');
      },

  },

  modules: {

  },

  getters: {
    
  },

})
