<template>
  <ul>
    <li class="clearfix"  v-for="item in list" :key="item.id">
      <div class="left pull-left">
        <input type="checkbox" id="goods" v-model="item.goods_state"/>
        <label for="goods">
          <img :src="item.goods_img" alt="!" />
        </label>
      </div>

      <div class="right pull-right">
        <p>{{item.goods_name}}</p>
        <div class="clearfix bottom">
          <span class="price pull-left">￥&nbsp;{{item.goods_price}}</span>
            <!-- 计数组件 -->
           <MyCount  :goods="item"/>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import MyCount from "./MyCount.vue"
export default {
  name:"MyMain",
  props:["list"],
  components:{
    MyCount,
  }
};
</script>

<style scoped>
ul { 
  padding: 60px 0;
}
/*li */
li {
  width: 100%;
}
/* 复选框图片区 */
.left {
  box-sizing: border-box;
  width: 40%;
  padding:0 10px;
}
.left img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-left: 10px;
}
.left input,
img {
  vertical-align: middle;
}
.right {
  position: relative;
  width: 60%;
  height: 100px;
}
/* 下方计数区 */
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 40px;
}
/* 计数区价格 */
.bottom span {
  color:red;
  font-weight: 700;
  font-size: 20px;
}

</style>