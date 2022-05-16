<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="searchContent"
    />

    <div v-show="searchList.length === 0">
      <p class="hotSearch">热门搜索</p>
      <ul class="hotWord">
        <li
          v-for="(item, index) in hotWordLIst"
          :key="index"
          @click="hot(item.first)"
        >
          {{ item.first }}
        </li>
      </ul>
    </div>

    <div v-show="searchList.length !== 0">
      <span class="title">最佳匹配</span>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
          <ItemName 
          v-for="item in searchList"  
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :label="item.artists[0].name + '  ' + item.name"
          />
        <!-- <van-cell
          :title="item.name"
          :label="item.artists[0].name + '  ' + item.name"
          v-for="item in searchList"
          :key="item.id"
        >
          <template #right-icon>
            <van-icon name="play-circle-o" class="play-circle-o" />
          </template>
        </van-cell> -->
      </van-list>
    </div>
  </div>
</template>

<script>
import { hotKeyword, searchSongList } from "../../api";
import ItemName from "./itemName.vue"

export default {
  name: "SearchMusic",
  data() {
    return {
      value: "", //搜索内容值
      hotWordLIst: [], //搜索热词列表
      searchList: [], //搜索列表
      page: 1, //页码
      loading: false,//标志一次数据已经加载完毕
      finished: false,//标志数据已经全部加载完毕
    };
  },
   components:{
    ItemName,
  },
  methods: {
    // 获取搜索热词
    async getHot() {
      let res = await hotKeyword();
      this.hotWordLIst = res.data.result.hots;
    },

    // 搜索框搜索请求
    async searchRequest() {
      let res = await searchSongList({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
      // 当该次请求不满20条的时候，就算加载完成了
      if(res.data.result.songs.length<20) {
          this.finished = true;
       }
      return res
    },


    // 点击热词进入搜索,这里不需要获取全部，所以不需要分页page
    async hot(first) {
      this.value = first;
      // 重置，使其能够与触发onload事件
      this.finished = false
      let res = await this.searchRequest();
      this.searchList = res.data.result.songs;
    },


    // 搜索框搜索,可能有多次请求要分页，展示完整
   async searchContent() {
      clearTimeout(this.timer);
      // 搜索请求,每隔0,5秒触发一次
      this.timer = setTimeout(async () => {
        this.page = 1//搜索框每次值发生变化就重置页码
        this.finished = false//每次重新搜索数据，都要重新开启finished否则无法触发onload事件
        if (this.value.trim() === "") {
          this.searchList = [];
          return;
        }

          let res = await this.searchRequest(); 
          if (res.data.result.songs.length === 0) {
            this.searchList = [];
          } else {
            this.searchList = res.data.result.songs;
          }
      }, 1000);

    },
    
    //触底加载 
    async onLoad() {
        this.page++
      // 触底则再次请求
        let res = await this.searchRequest();
         this.searchList = [...this.searchList,...res.data.result.songs]
        
        // 本次加载完成，重置
        this.loading = false;
        // 当单次请求不足20条时，就finished为true，判断加在请求里面

      
    },
  },
    




  created() {
    this.getHot();
  },
};
</script>

<style scoped>
.hotSearch {
  font-size: 14px;
  color: #666;
  padding-left: 20px;
}
.hotWord {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
}
.hotWord li {
  padding: 4px 14px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-right: 10px;
  font-size: 14px;
}
.title {
  padding: 0 10px 5px;
  font-size: 12px;
  color: #666;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.play-circle-o {
  font-size: 20px;
  line-height: 46px;
}
</style>