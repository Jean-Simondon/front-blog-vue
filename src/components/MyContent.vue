<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyContent"
};
</script>

<style lang="scss">
.content {
  max-width: 1440px;
  margin: 10px auto;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
}
</style>
