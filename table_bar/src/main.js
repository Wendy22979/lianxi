import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Container,Icon,Table,TableColumn,Button,Tag,Input} from 'element-ui';

Vue.use(Container);
Vue.use(Icon);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Input);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
 }
}).$mount('#app')
