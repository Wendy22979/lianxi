<template>
  <div id="app">
    <MyHeader/>
    <MyMain :list="list"/>
    <MyFooter :list="list"/>

  
  </div>
</template>

<script>
//  引入的第三方组件
import axios from "axios"

// 引入的功能组件
import MyMain from './components/MyMain/MyMain'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'

export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  methods:{
    // 数量更改计数
    UpCount(counts,id){
      this.list.forEach((value)=>{
        if(value.id == id) value.goods_count = counts
      })
    },
    // 商品数量为0删除
    countDelete(id){
      this.list = this.list.filter((value)=>{
        return value.id != id
      })
    },
    // 全选反选
    listAll(state){
       this.list.forEach((value)=>{
        value.goods_state = state
      })
    }

  },
  components: {
   MyMain,
   MyFooter,
   MyHeader

  },
  // 初始化请求
 async created(){
   try{
    const response= await axios.get("https://www.escook.cn/api/cart")
    this.list = response.data.list
    console.log(response.data.list)
   }catch(error){
     console.log(error)
   }
  },
  // 绑定自定义事件
  mounted(){
    // 数量件数传回
    this.$bus.$on("googsCount",this.UpCount)
    // 数量为零即删除
    this.$bus.$on("countDelete",this.countDelete)
    // 全选反选
    this.$bus.$on("listAll",this.listAll)
  },
  // 自定义事件销毁
  beforeDestroy(){
      // 数量件数传回
    this.$bus.$off("googsCount")
        // 数量为零即删除
    this.$bus.$off("countDelete")
  }
}
</script>

<style>
 .flex-1{
   flex:1;
 }

</style>
