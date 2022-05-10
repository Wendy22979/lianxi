<template>
  <footer>
    <div class=" all">
    <input type="checkbox" v-model="all" ><span>全选</span>
    </div>
    <div class="total flex-1">合计:￥{{total}}</div>
    <button class="btn ">结算({{statistics}})</button>
  </footer>
</template>

<script>
  export default {
    name:"MyFooter",
    props:["list"],
    computed:{
      // 结算
      statistics(){
        let sum = 0;
        this.list.forEach((value)=>{
          if(value.goods_state){
             sum += value.goods_count
          }
        })
        return sum
      },
      //总价
      total(){
        let sum = 0;
        this.list.forEach((value)=>{
          if(value.goods_state){
             sum += value.goods_price * value.goods_count
          }
        })
        return sum
      },
      // 全选反选
      all:{
        get(){
          return  this.list.every((val)=>{
            return val.goods_state === true
          })
        },
        set(val){
          this.$bus.$emit("listAll",val)
        }
      }
    },
    
  }
</script>

<style scoped>
 footer {
   position:fixed;
   bottom:0;
   left:0;
   display: flex;
   width: 100%;
   height: 60px;
   line-height: 60px;
   border:1px solid #ccc;
   font-size: 18px;
   background-color: #fff;
 }
 input,span{
    vertical-align: middle;
 }
 input {
   width: 20px;
   height: 20px;
   margin:0;
   margin-right: 10px;
 }
.all {
  padding-left: 20px;
}

footer .btn{
  background-color: rgb(51,122,183);
  font-size: 20px;
  border-radius: 50px;
  margin: 10px;
  height: 40px;
  color:#fff;
}
.total{
  text-align:right;
}
</style>