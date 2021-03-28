<template>

    <div class="article">

        <h1>CREATING</h1>

        <label for="title">Titre :</label>
        <input class="article__title" id="title" type="text" v-model="title" required />
        <label for="content">Content :</label>
        <textarea class="article__content" id="content" rows="30" cols="100" v-model="content" required/>
        <p class="article__author">{{ author.username }}</p>

        <div class="article__admin-option">

          <a v-if="identified" v-show="!isCreated" @click="createOrSave"><button class="btn btn__green">CREER</button></a>

          <a v-if="identified" v-show="isCreated" @click="createOrSave"><button class="btn btn__green" >SAUVEGARDER</button></a>

          <router-link :to="{ name: 'Articles' }"><button class="btn btn__blue">RETOUR</button></router-link>

        </div>

    </div>

</template>

<script>
import Vue from 'vue'

export default {
  name: "ReadArticle",
  
  props: {
    id: {
      style: Number,
      default: 0,
    },
    title: {
      style: String,
      default: "",
    },
    content: {
      style: String,
      default: ""
    },
    author: {
      style: Object,
      default: () => {
        return {
          username: "",
        }
      },
    },
    mode: {
      style: String,
      default: "read",
    }
  },

  data() {
    return {
      isCreated: false,
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
    createOrSave() {
      const axiosConfig = {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.jwt,
        }
      };
      const data = {
        content: this.content,
        title: this.title,
      };
      if( this.isCreated == false ) { // la première fois, ce sera une requête de création (post)
        this.isCreated = true;
        Vue.axios.post( this.$store.state.backEnd + "article", data, axiosConfig )
        .then( (response ) => {
          console.log(response);
        })
      .catch(error => console.log(error));
      } else { // si on a déjà fait créer une fois, alors ça revient à faire du update (patch)
        Vue.axios.patch( this.$store.state.backEnd + "article/" + this.id, data, axiosConfig )
        .then( (response ) => {
          console.log(response);
        })
      .catch(error => console.log(error));
      }
      this.$store.dispatch('fetchArticle', this.$route.params.articleId );
      return true;
    }
  },

};
</script>

<style scoped lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;

    &____admin-option {
      margin: 10px auto;

    }

    &__title {
      min-width: 300px;
      max-width: 600px;
      margin: 10px auto;
    }

    &__content {
      margin: 10px auto;
      padding: 40px;
    }

    &__author {
      
    }


  }

</style>
