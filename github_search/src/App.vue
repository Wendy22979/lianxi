<template>
  <div>
    <Search />
    <List />
  </div>
</template>

<script>
    import "../node_modules/bootstrap/dist/css/bootstrap.css"
    import List from "./components/gitList.vue";
    import Search from "./components/gitSearch.vue";
    export default {
      name: "App",
      components: {
        Search,
        List,
      },
    };
</script>

<style lang="less">

</style>
