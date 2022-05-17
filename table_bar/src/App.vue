<template>
  <div id="app">
    <header>
      <h1>tabbar案例</h1>
    </header>

    <router-view />

    <footer>
      <!-- 底部导航 -->
      <el-container class="footerNav">
        <router-link :to="item.to" v-for="(item) in homepage" :key="item.id"  active-class="active">
          <el-container direction="vertical">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </el-container>
        </router-link>
      </el-container>
    </footer>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      homepage: [
        {id:1,title:"商品列表",icon:"el-icon-tickets",to:"/list"},
        {id:2,title:"商品搜索", icon:"el-icon-search",to:"/search"},
        {id:3,title:"我的信息", icon:"el-icon-user",to:"/messages"}
      ],
    }
  },
  methods: {},
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index:2;
  width: 100%;
}
h1 {
  width: 100%;
  color: #fff;
  background-color: rgb(124, 192, 225);
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:2;
  width: 100%;
}
.footerNav {
  width: 100%;
  justify-content: space-around;
  text-align: center;
  border-top:1px solid #ccc;
  padding: 8px 0;
  background-color: #fff;
}
.footerNav a {
  text-decoration: none;
  color:#666;
  font-size: 18px;
}
.footerNav .active {
  color: rgb(72, 196, 230);
}
</style>
