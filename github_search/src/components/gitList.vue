<template>
  <ul>
    <GitItem v-for="item in items" :key="item.login"  :item="item"/>
  </ul>
</template>

<script>
 import GitItem from "./gitItem.vue"
 export default {
   data() {
     return {
       items: [],
     }
   },
   methods:{
    //  接收信息
     setResult(item){
       this.items = item
     }
   },
  mounted(){
  //  将搜索返回内容传给gitlist
  this.$bus.$on("setResult",this.setResult)
 },
 beforeDestroy(){
    this.$bus.$off("setResult")
 },

  components:{
    GitItem,
  }
};
</script>

<style lang="less" scoped>
 ul{
   width: 700px;
   margin: 10px auto;
   padding:0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
  
 }
</style>