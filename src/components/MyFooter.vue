<template>
  <div class="footer">
    <div class="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/about">A Propos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
};
</script>

<style lang="scss">
.footer {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  a {
    padding-left: 3px;
    padding-right: 3px;
  }
}
</style>
