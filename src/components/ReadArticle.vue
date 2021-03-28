<template>

    <div class="article">

      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <p>{{ author.username }}</p>

      <div v-if="identified && isAuthor" class="article__admin-option">
        <router-link :to="{ name: 'Article', params: { articleId: this.$route.params.articleId, mode: 'update' }}"><button class="btn btn__blue">UPDATE</button></router-link>
        <router-link :to="{ name: 'Article', params: { articleId: this.$route.params.articleId, mode: 'delete' }}"><button class="btn btn__blue">DELETE</button></router-link>
      </div>

    </div>

</template>

<script>
export default {
  name: "ReadArticle",
  
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
      isUpdating: false,
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
    isAuthor() {
      return this.$store.state.currentUser.email === this.author.email;
    }

  },
  
};
</script>

<style scoped lang="scss">
  .article {
    position: relative;

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

  }

</style>
