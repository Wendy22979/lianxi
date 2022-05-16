import request from "../utils/resques"//调用axios工具

// 热搜关键词
export const hotWord = () => request({
  url:"/search/hot",
})

// 搜索信息

export const searchSong = (params) => request({
  url:"/search",
  params
})
