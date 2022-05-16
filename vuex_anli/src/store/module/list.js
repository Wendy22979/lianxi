import {ListCenter} from "@/api/index"
export default {
  namespaced:true,
  actions:{
    // 请求
    async listRequest(context,params){
     let res = await ListCenter(params)
     context.commit('LISTREQUEST',res.data.data.results)
    }
  },
  mutations:{
    LISTREQUEST(state,value){
      state.infoList = value
    }
  },
  state:{
    infoList:[],
  },

}