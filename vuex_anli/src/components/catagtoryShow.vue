<template>
  <ul class="catagtory">
      <li :class="{select:item.id == activateStatus}" @click="passing(item.id)"  v-for="item  in catagtoryList" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<script>
 import {CListings} from "@/api"
import { mapMutations, mapState } from 'vuex'

  export default {
    name:"CatagtoryShow",
    methods:{
     ...mapMutations('catagtory',[
       "setCatagtory",
       "setactivateStatus",
     ]),
    //  将当前状态给
     passing(id){
       this.setactivateStatus(id)
     }
    },
    computed:{
      ...mapState('catagtory',{
        catagtoryList:(state) => state.catagtoryList,
        activateStatus:(state) => state.activateStatus,
      })
    },

    
    async created(){
      // 获取初始化列表
      let catagtoryList = await CListings()
      this.setCatagtory(catagtoryList.data.data.channels)
    }
  }
</script>

<style scoped>

</style>