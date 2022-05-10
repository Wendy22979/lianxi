<template>
  <div class="count pull-right">
    <button @click="add">+</button>
    <input type="text" v-model.number="count"/>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
export default {
  name:"MyCount",
  props:["goods"],
  methods:{
    // 数量加
    add(){
      this.count++
    },
    // 数量减
    subtract(){
      if(this.count != 1){
       this.count--
      } else {
        // 删除该节点
        this.$bus.$emit("countDelete",this.goods.id)
      }
    }
  },
  computed:{
    //数量监控
    count:{
      get(){
        return this.goods.goods_count;
      },
      set(val){
        if(val){
         //一次更改会有两次输出，所以控制一下条件
        this.$bus.$emit("googsCount",val,this.goods.id)
        }

      }
    }
  }
};
</script>

<style scoped>
 /* 计数区数量选择 */
  .count {
    padding-right: 40px;
  }

  .count input {
    width: 60px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0 10px;
    vertical-align: middle;
    text-align: center;
  }
  .count button {
    outline: none;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
  }
</style>