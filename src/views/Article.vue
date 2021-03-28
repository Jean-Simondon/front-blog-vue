<template>

  <div class="article">

    <div class="article-wrapper" v-if="!isLoading">
      
      <ReadArticle v-if="reading"
        :id="getArticle._id"
        :title="getArticle.title"
        :content="getArticle.content"
        :author="getArticle.author[0]"
      />

      <UpdateArticle v-else-if="updating"
        :id="getArticle._id"
        :title="getArticle.title"
        :content="getArticle.content"
        :author="getArticle.author[0]"
      />

      <DeleteArticle v-else-if="deleting"
        :id="getArticle._id"
        :title="getArticle.title"
        :content="getArticle.content"
        :author="getArticle.author[0]"
      />

      <CreateArticle v-else-if="creating"/>

    </div>

    <div class="article-wrapper" v-else>
      <img src="../assets/spinner.gif" alt="spinner" />
    </div>

  </div>

</template>

<script>
import ReadArticle from '@/components/ReadArticle.vue'
import UpdateArticle from '@/components/UpdateArticle.vue'
import DeleteArticle from '@/components/DeleteArticle.vue'
import CreateArticle from '@/components/CreateArticle.vue'

export default {
  name: 'Article',

  components: {
    ReadArticle,
    UpdateArticle,
    DeleteArticle,
    CreateArticle,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    getArticle() {
      return this.$store.state.article;
    },
    identified() {
      if( this.$store.state.jwt !== undefined ) {
        return true;
      } else {
        return false;
      }
    },
    updating() {
      if( this.$route.params.mode == "update" ) {
        return true;
      } else {
        return false;
      }
    },
    deleting() {
      if( this.$route.params.mode == "delete") {
        return true;
      } else {
        return false;
      }
    },
    reading() {
      if( this.$route.params.mode  == "read") {
        return true;
      } else {
        return false;
      }
    },
    creating() {
      if( this.$route.params.mode  == "create") {
        return true;
      } else {
        return false;
      }
    }

 },

  mounted() {
    this.isLoading = false;
    this.$store.dispatch('fetchArticle', this.$route.params.articleId );
  }

};
</script>

<style scoped>
.article-wrapper {
  min-height: 70vh;
}
</style>