// 统一封装网络请求方法
import request from "../utils/resques"//调用axios工具

// 推荐歌单
export const recommendSong = (params) => request({
  url:"/personalized",
  params
})


// 最新音乐
export const latestMusic = (params) => request({
  url:"/personalized/newsong",
  params
})

