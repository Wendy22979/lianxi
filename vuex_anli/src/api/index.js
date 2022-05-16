import axios from "@/utiles/request"

//分类列表请求
 export const CListings = ()=> axios({
  url:"/channels"
})

// 内容列表
export const ListCenter =(params)=> axios({
  url:"/articles",
  params
})