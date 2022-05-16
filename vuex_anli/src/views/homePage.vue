<template>
  <div>
    <!-- 分类区 -->
    <CatagtoryShow/>
       
    <!--列表展示区  -->
    <ListShows/>
  </div>
</template>

<script>
import ListShows from "@/components/listShows.vue"
import CatagtoryShow from "@/components/catagtoryShow.vue"
  export default {
    name:"homePage",
    components:{
      ListShows,
      CatagtoryShow
    }
  }
</script>

<style scoped>

</style>