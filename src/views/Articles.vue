<template>

  <div class="archive-article">

    <router-link v-if="identified" :to="{ name: 'Article', params: { articleId: 0, mode: 'create' }}"><button class="btn btn__blue">Nouvel Article</button></router-link>

    <div class="card-wrapper" v-if="!isLoading">
      <CardArticle v-for="article in getArticles" :key="article._id"
          :id="article._id"
          :title="article.title"
          :content="article.content"
          :author="article.author"
      />
    </div>

    <div class="card-wrapper" v-else>
      <img src="../assets/spinner.gif" alt="spinner" />
    </div>

  </div>

</template>

<script>
import CardArticle from '@/components/CardArticle.vue'

export default {
  name: 'Articles',

  components: {
    CardArticle,
  },

  props: {
    articles: {
      style: Object,
      default: () => {},
    }
  },

  data() {
    return {
      isLoading: true,
    }
  },

  computed: {
    getArticles() {
      return this.$store.state.articles;
    },
    identified() {
      if( this.$store.state.jwt != undefined ) {
        return true;
      } else {
        return false;
      }
    }
  },

  mounted() {
    this.$store.dispatch('fetchArticles');
    this.isLoading = false;
  }

};

</script>

<style scoped lang="scss">
  .card-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>