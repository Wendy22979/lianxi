
export default {
  namespaced:true,
  actions:{
  },
  mutations:{
    setCatagtory(state,list){
      // 初始化分类列表存储数据
      state.catagtoryList = list
    },
    // 更新当前所处的分类
    setactivateStatus(state,id){
      state.activateStatus = id
    }
  },
  state:{
    catagtoryList:[],
    activateStatus:"0",//存储当前分类的id
  },
}