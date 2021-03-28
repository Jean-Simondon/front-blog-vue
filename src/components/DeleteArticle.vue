<template>

    <div class="article">

      <h1>SUPPRIMER</h1>

      <h1 class="article__title">{{ title }}</h1>
      <p class="article__content">{{ content }}</p>
      <p class="article__author">{{ author.username }}</p>

      <div class="article__admin-option">
        <a v-if="identified && isAuthor" v-show="!isDestroy" @click="erase"><button class="btn btn__red" >CONFIRMER</button></a>
        <router-link v-show="!isDestroy" :to="{ name: 'Article', params: { articleId: this.$route.params.articleId, mode: 'read' }}"><button class="btn btn__green" >RETOUR</button></router-link>
        <router-link v-show="isDestroy" :to="{ name: 'Articles' }"><button class="btn btn__green" >RETOUR</button></router-link>
      </div>

    <div class="dark_layer"></div>

    </div>

</template>

<script>
import Vue from 'vue'

export default {
  name: "DeleteArticle",
  
  props: {
    id: {
      style: Number,
      default: 0,
    },
    title: {
      style: String,
      default: "le titre à éditer",
    },
    content: {
      style: String,
      default: "Le contenu à éditer"
    },
    author: {
      style: Object,
      default: () => {
        return {
          username: "undefined",
        }
      },
    },
    mode: {
      style: String,
      default: "read",
    }
  },

  computed: {
    isAuthor() {
      return this.$store.state.currentUser.email === this.author.email;
    }
  },

  methods: {
    identified() {
      if( this.$store.state.jwt !== undefined ) {
        return true;
      } else {
        return false;
      }
    },    
    erase() {
      const axiosConfig = {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.jwt,
        }
      };
      Vue.axios.delete( this.$store.state.backEnd + "article/" + this.id, axiosConfig )
      .then( (response ) => {
        console.log(response);
        this.isDestroy = true;
      })
      .catch(error => console.log(error));
      this.$store.dispatch('fetchArticle', this.$route.params.articleId );
    },
  }

};
</script>

<style scoped lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;

    &__admin-option {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }

    &__title {
      max-width: 500px;
      margin: 0 auto;
    }

    &__content {
      max-width: 1000px;
      margin: 0 auto;
    }

    &__author {
      
    }

    .dark_layer {
      background-color: black;
      opacity: .2;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      z-index: 2;
    }

  }

</style>
