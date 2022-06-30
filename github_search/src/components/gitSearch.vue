<template>
  <div class="jumbotron">
    <h1>Search Github Users</h1>
    <input type="text" v-model="seek"/>
    <button @click="getSearch">search</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      seek: "",
      result:[],
    }
  },
 methods: {
   getSearch() {
     console.log(this.seek)
     axios.get(`https://api.github.com/search/users?q=${this.seek}`).then(
       response => {
        // 将请求结果存储
         this.result = response.data.items
         this.$bus.$emit("setResult",this.result)
         console.log(this.result)
       },
       error =>{
          console.log("请求失败",error)
       }
     )
   },

 },


};
</script>

<style lang="less" scoped>
.jumbotron {
  width: 700px;
  height: 200px;
  margin: 20px auto;
  border: 1px solid #f1f1f1;
  background-color: rgb(243, 239, 239);
  padding: 50px 70px;
  input {
    margin-top: 10px;
    margin-right:10px;
  }
  button {
    outline: none;
    border: 1px solid black;
    padding: 5px;
  }
}
</style>