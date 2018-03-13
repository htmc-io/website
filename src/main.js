// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import home from 'components/home/home'
import solution from 'components/solution/solution'
import cases from 'components/cases/cases'
import about from 'components/about/about'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: home },
  { path: '/solution', component: solution },
  { path: '/cases', component: cases },
  { path: '/about', component: about }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.push('/home')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
