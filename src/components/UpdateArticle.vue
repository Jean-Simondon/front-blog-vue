<template>

    <div class="article">

      <h1>MODIFIER</h1>

      <input class="article__title" type="text" v-model="internalTitle">
      <textarea class="article__content" rows="30" cols="100" v-model="internalContent" />
      <p>Auteur : {{ author.username }}</p>

      <div class="article__admin-option" v-if="!isSaving">
        <a v-if="isAuthor && identified" @click="update"><button class="btn btn__red" >SAUVEGARDER</button></a>
        <router-link :to="{ name: 'Articles'}"><button class="btn btn__green" >RETOUR</button></router-link>
      </div>

      <div class="article__admin-option" v-if="isSaving">
        <img src="../assets/spinner.gif" alt="spinner" />
      </div>

    </div>

</template>

<script>
import Vue from 'vue'

export default {
  name: "UpdateArticle",

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

  data() {
    return {
      isSaving: false,
      internalTitle: this.title,
      internalContent: this.content,
    }
  },

  computed: {
    isAuthor() {
      return this.$store.state.currentUser.email === this.author.email;
    }
  },

  methods: {
    identified() {
      return this.$store.state.jwt !== undefined;
    },
    update() {
      this.isSaving = true;
      const axiosConfig = {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.jwt,
        }
      };
      const data = {
        title: this.internalTitle,
        content: this.internalContent,
      };
      Vue.axios.patch( this.$store.state.backEnd + "article/" + this.id, data, axiosConfig )
        .then( (response ) => {
          console.log(response);
          this.isSaving = false;
        })
      .catch(error => {
        console.log(error);
        this.isSaving = false;
      });
      return true;
    },
  }

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
