<template>
  <div>
    
      <!-- 页眉 -->
      <van-nav-bar :title="activeTitle" :fixed="true" z-index/>


    <!-- 切换区 -->
    <div class="main">
      <router-view> </router-view>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item replace to="/homepage" icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace to="/search" icon="search"
          >搜索</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayOut",
  data() {
    return {
      active: 0,
      activeTitle: "首页",
    };
  },
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.main {
  padding: 50px 0;
}
</style>