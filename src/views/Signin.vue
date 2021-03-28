<template>
  <div class="signin">

    <h1>Connexion</h1>

    <div v-if="!identified" class="signin__form">

      <div class="signin__field">

        <div class="signin__form-username">
          <label for="username">Username</label><br />
          <input type="text" id="username" v-model="username" required>
        </div>

        <div class="signin__form-email">
          <label for="email">Email</label><br />
          <input type="text" id="email" v-model="email" required>
        </div>

        <div class="signin__form-password">
          <label for="password">Password</label><br />
          <input type="password" id="password" autocomplete="off" v-model="password" required>
        </div>

      </div>

      <div class="signin__submit">
        <button @click="submitForm" class="btn btn__blue">Inscription</button>
      </div>

    </div>

    <div v-else>
      <p>Vous êtes Connecté. Déconnectez-vous avant de créer un autre compte</p>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Signin',

  data() {
    return {
      username: "",
      email: "",
      password: "",
    }
  },

  computed: {
    identified() {
      if( this.$store.state.jwt !== undefined ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    submitForm() {
      if( this.username == "" || this.password == "" || this.username == "" ) {
        return;
      }
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      Vue.axios.post( this.$store.state.backEnd + "user", data )
        .then( (response) => {
          console.log(response);
        })
        .catch(error => console.log(error));
    },
  }
  

};
</script>

<style scoped lang="scss">
.signin {
  min-height: 70vh;
  display: flex;
  flex-direction: column;

  &__field {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }

  &__submit {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

}
</style>