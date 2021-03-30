<template>
  <div class="login">

    <h1>Connexion</h1>

    <p class="error" v-if="isError">Erreur de connexion, veuillez essayer à nouveau</p>

    <div v-if="!identified && !isConnecting"  class="login__form" action="">

      <div class="login__field">

        <div class="login__form-email">
          <label for="email">Email</label><br />
          <input type="text" id="email" v-model="email" required>
        </div>

        <div class="login__form-password">
          <label for="password">Password</label><br />
          <input type="password" id="password" autocomplete="off" v-model="password" required>
        </div>

      </div>

      <div class="login__submit">
        <button @click="submitForm" class="btn btn__blue">Connexion</button>
      </div>

    </div>

    <div v-if="isConnecting">
      <img src="../assets/spinner.gif" alt="spinner" />
    </div>

    <div v-if="identified">
      <p>Vous êtes connecté</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',

  data() {
    return {
      isError: false,
      email: "",
      password: "",
      isConnecting: false,
    }
  },

  computed: {
    identified() {
      if( this.$store.state.jwt != undefined ) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    submitForm() {
      this.isConnecting = true;
      let payload = {
        email: this.email,
        password: this.password,
      };
      this.isConnecting = !this.$store.dispatch( 'login', payload );
      if( this.isConnecting == true ) {
        this.displayError();
        this.isConnecting = false;
      }
    },
    displayError() {
      setTimeout(function() {
        this.isError = false;
      }, 4000);
    },
  }

};
</script>

<style scoped lang="scss">
.login {
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