<template>
  <div class="account">

    <h1>Profil</h1>

    <p>Username : {{ getCurrentUser.username }}</p>
    <p>Email : {{ getCurrentUser.email }}</p>

  </div>
</template>

<script>

export default {
  name: 'Account',

  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser;
    }
  }

};
</script>

<style scoped lang="scss">
.account {

}
</style>