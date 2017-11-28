//启动及配置
import Vue from './vue.js';
import App from './app.js';
import add from './add.js'
import update from './update.js'
import Del from './del.js'
import list from './list.js'

//全局组件
Vue.component('add', add)

Vue.component('update', update)

Vue.component('dele', Del)

Vue.component('list',list)

new Vue({
  el: '#app',
  render: c => c(App)
})