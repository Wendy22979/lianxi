<template>
  <div>
    <!-- 推荐歌单 -->
    <p class="title">推荐歌单</p>
    <van-row type="flex" justify="space-around" gutter="20">
      <van-col
        span="8"
        v-for="item in recommendList"
        :key="item.id"
        class="center"
      >
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="itemName text-left">{{ item.name }}</p>
      </van-col>
    </van-row>
    <!-- 最新音乐 -->
    <p class="title">最新音乐</p>
    <van-cell-group>
      <ItemName
        v-for="item in latestList"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :label="item.song.artists[0].name + '  ' + item.name"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { recommendSongList, latestMusicList } from "../../api/index";
import ItemName from "./itemName.vue";
export default {
  name: "HomePage",
  data() {
    return {
      recommendList: [],
      latestList: [],
    };
  },
  components: {
    ItemName,
  },
  methods: {
    // 初始化推荐列表
    async getList() {
      let res = await recommendSongList({ limit: 6 });
      this.recommendList = res.data.result;
    },
    // 初始化最新音乐列表
    async latestMusic() {
      let res = await latestMusicList({ limit: 20 });
      this.latestList = res.data.result;
      console.log(this.latestList);
    },
  },

  created() {
    // 推荐列表
    this.getList();
    // 最新列表
    this.latestMusic();
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.title {
  background-color: rgb(238, 238, 238);
  padding: 10px 10px;
  margin: 4px 0 10px;
}
.itemName {
  font-size: 14px;
}
.center {
  text-align: center;
}
.text-left {
  text-align: left;
}
</style>