<template>

  <router-link class="card__link" :to="{ name: 'Article', params: { articleId: id, mode: 'read' }}">
    <div class="card">
      <h1 class="card__title">{{ cropTitle }}</h1>
      <p class="card__content">{{ cropContent }}</p>
      <p class="card__author">{{ author[0].username }}</p>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "CardArticle",

  props: {
    id: {
      style: Number,
      default: 0,
    },
    title: {
      style: String,
      default: "the title",
    },
    content: {
      style: String,
      default: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vel accusamus quod, error modi repellat assumenda et sed minima voluptatum magni! Unde aperiam at soluta dolorem incidunt voluptatum molestiae voluptas."
    },
    author: {
      style: Object,
      default: () => {},
    },
  },

  computed: {
    cropTitle() {
      return this.title.substring(0, 18) + "...";
    },
    cropContent() {
      return this.content.substring(0, 45) + "...";
    }
  }

};
</script>

<style scoped lang="scss">
  .card {
    width: 200px;
    min-width: 200px;
    height: 200px;
    min-height: 200px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    position: relative;
    box-shadow: 5px 5px 10px grey;
    overflow: hidden;

      &:hover {
        cursor: pointer;
        box-shadow: 5px 5px 20px black;
        transition: .2s;
        transform: translate(0, -3px);
      }

      &__link {
        text-decoration: none;
      }

      &__title {
        font-size: 1.6em;
      }

      &__content {
        
      }

      &__author {
        position: absolute;
        bottom: -5px;
        right: 20px;
        font-style: italic;
      }


    }
</style>
