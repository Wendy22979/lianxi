import Vue from 'vue'
import Vuex from 'vuex'
import list from "./module/list"
import catagtory from "./module/catagtory"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    catagtory
  }
})
