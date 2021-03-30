<template>
  <div class="signin">

    <h1>Connexion</h1>

    <p class="error" v-if="isError">Erreur de création de compte, veuillez essayer à nouveau</p>
    <p class="success" v-if="isSuccess">Bravo, votre compte a été crée avec succès</p>

    <form v-if="!identified && !isCreating && !isSuccess" class="signin__form" action="">

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
        <div @click="submitForm" class="btn btn__blue">Inscription</div>
      </div>

    </form>

    <div v-if="isCreating">
      <img src="../assets/spinner.gif" alt="spinner" />
    </div>

    <div v-if="identified">
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
      isCreating: false,
      isError: false,
      isSuccess: false,
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
      if( this.username == "" || this.username == undefined || this.password == "" ||  this.password == undefined || this.username == "" ||  this.username == undefined ) {
        return;
      }
      this.isCreating = true;
      const self = this;
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      Vue.axios.post( this.$store.state.backEnd + "user", data )
        .then( (response) => {
          console.log(response);
          this.isCreating = false;
          this.isSuccess = true;
          setTimeout(function() {
            self.isSuccess = false;
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          this.isCreating = false;
          this.isError = true;
          setTimeout(function() {
            self.isError = false;
          }, 3000);
        });
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