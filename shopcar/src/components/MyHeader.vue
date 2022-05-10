<template>
  <header>
    <h1  class="blue">购物车案例</h1>
  </header>
</template>

<script>
export default {
  name:"MyHeader"
};
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
  header{
    position:fixed;
    top:0;
    left:0;
    z-index:2;
    width: 100%;
  }
  h1 {
    flex:1;
    text-align: center;
    line-height: 60px;
    font-size: 26px;
  }
  .blue {
    background-color: rgb(45, 98, 173);
    color:#fff;
  }

</style>