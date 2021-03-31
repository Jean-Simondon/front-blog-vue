<template>

  <div class="home">

    <h1 class="home__title">Bienvenue</h1>

    <h2 class="home__heading">Vous voici sur le blog de Jean Simondon</h2>

    <p class="home__content">Ce site a été réalisé dans le cadre de la formation APIDAE, afin de pratiquer le framework Vue JS.</p>
    <p class="home_content">Vous êtes libre de parcourir le site afin de tester les différentes routes, notamment la page d'archive des articles qui vous menèra, au clic sur une carte, vers l'article complet en question.</p>
    <p class="home_content">Vous êtes également invité à utiliser le système de compte pour vous inscrire et accéder aux fonctionnalités de création / modification / suppression d'article.</p>

    <p>N'hésitez pas à vous rendre sur la page <router-link to="/about">A Propos</router-link> pour obtenir d'avantage d'informations à propos de chaque fonctionnalité de ce projet.</p>

    <p class="home__author">Jean Simondon</p>

  </div>

</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped lang="scss">

  .home {
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      &__title {

      }

      &__heading {

      }

      &__content {

      }

      &__author {
        text-align: end;
        margin-right: 200px;
      }

  }

</style>