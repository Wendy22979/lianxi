<template>
     <li>
      <a :href="item.html_url">
        <img :src="item.avatar_url" alt="users" />
        <p>{{item.login}}</p>
      </a>
    </li>
</template>

<script>
  export default {
    props:["item"]
    
  }
</script>

<style lang="less" scoped>
   li {
     box-sizing: border-box;
     width: 150px;
     margin-right:33px;
     margin-bottom: 10px;
     font-size: 16px;
     border: 1px solid #ccc;
     a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color:black;
       text-decoration: none;
       img {
         width: 150px;
       }

     }
   }
   li:nth-of-type(4n){
     margin-right: 0;
   }
</style>