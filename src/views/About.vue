<template>
  <div class="about">

    <h1>À Propos</h1>

    <p>Afin de parcourir ce site et d'en découvrir toutes les fonctionnalités, voici un descriptif des différentes pages et de ce qu'il faut en attendre :</p>

    <h3>Accueil</h3>

    <p>Simple page d'accueil qui vous a mené ici</p>

    <h3>Articles</h3>

    <p>Cette page listera tous les articles de la base de données, quelque soit l'auteur, et que vous soyez en mode connecté. À noter que si vous êtes connectés, vous disposerez d'un bouton "Nouvel Article" afin d'en créer un nouveau</p>

    <h3>Article</h3>

    <p>
      En cliquant sur un article, cela vous mène à sa page de détails.
      Si vous étiez sur un autre article précédemment, un délais peut exister pour l'affichage et prendre du temps avant de remplacer le précédent article.
      Si vous êtes connectés, et que vous êtes l'auteur de cet article, alors les bouton UPDATE et DELETE s'affichent.
      Ils vous mèneront respectivement à des pages proposant la modification de l'article, ou à la confirmation de sa suppression.
    </p>

    <h3>Update article</h3>

    <p>L'article se transforme en éditeur et vous propose de modifier les valeurs, puis de sauvegarder vos changements ou bien de revenir en arrière</p>

    <h3>Delete article</h3>

    <p>Ecran afin de confirmer la suppression de l'article ou revenir en arrière</p>

    <h3>À propos</h3>

    <p>C'est ici, une simple page pour lister le fonctionnement du site</p>

    <h3>Connexion</h3>

    <p>Renseignez vos identifiants utilisé lors de votre inscription, et vous voilà connecté, vous acceder ainsi à plus d'options vis à vis du site (create, update, delete de vos articles)</p>

    <h3>Inscription</h3>

    <p>Renseignez les informations demandés afin de créer un compte. Attention, contrainre d'unicité sur les adresses email</p>

    <h3>Profil</h3>

    <p>Dispnible uniquement lorsque vous êtes connecté, vous pouvez vérifier vos informations personnelles</p>

  </div>
</template>

<script>

export default {
    name: 'About',
  components: {
    
  },
};
</script>

<style scoped>
  .about {
    min-height: 70vh;
  }
</style>