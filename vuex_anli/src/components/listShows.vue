<template>
  <!-- 列表展示区 -->
  <div class="list">
    <div class="article_item" v-for="item in infoList" :key="item.art_id">
      <h3>{{ item.title }}</h3>
      <div
        class="img_box"
        v-if="Object.prototype.hasOwnProperty.call(item.cover, 'images')"
      >
        <img :src="item.cover.images[0]" class="w100" alt="!" />
      </div>
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ListShows",

  methods: {
    ...mapActions("list", ["listRequest"]),
  },
  computed: {
    ...mapState("list", {
      infoList: (state) => state.infoList, //初始请求数据
    }),
    ...mapState("catagtory", {
      activateStatus: (state) => state.activateStatus, //当前分类的id
    }),
  },
  watch: {
    activateStatus(newval) {
      // 更新请求
      this.listRequest({
        channel_id: newval,
        timestamp: Date.now(),
        with_top: 1,
      });
    },
  },
  created() {
    // 初始化请求
    this.listRequest({
      channel_id: "0",
      timestamp: Date.now(),
      with_top: 1,
    });
  },
};
</script>

<style scoped>
</style>