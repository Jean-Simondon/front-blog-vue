<template>

  <div class="header">
    <div class="nav"> 
      
      <router-link to="/">Accueil</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/about">A Propos</router-link>

      <router-link v-show="!identified" to="/login">Connexion</router-link>

      <router-link @click="logout" v-show="identified" to="/account">Profil</router-link>

      <router-link v-show="!identified" to="/signin">Inscription</router-link>

      <button @click="logout" v-show="identified" class="btn btn__red">Deconnexion</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",

  computed: {
    identified() {
      if( this.$store.state.jwt !== undefined ) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }

};
</script>

<style lang="scss">
.header {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  a {
    padding-left: 3px;
    padding-right: 3px;
  }
}
</style>
