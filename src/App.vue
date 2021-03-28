<template>
  <div id="app" class="container">
      <MyHeader />
      <MyContent />
      <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyContent from "./components/MyContent";

export default {
    name: "App",
    components: {
      MyHeader,
      MyFooter,
      MyContent
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #42b983;

    &:hover {
      color: #4ddd9c;
    }

    &.router-link-exact-active {
      color: #1b5038;
    }
  }
}

.btn {
  border: none;
  margin: 10px;
  border-radius: 3px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 20px black;
    transition: .2s;
    transform: translate(0, -3px);
  }

  &__blue {
    color: white;
    background-color: blue;
  }

  &__green {
    color: white;
    background-color: green;
  }

  &__red {
    background-color: red;
  }

}

</style>
