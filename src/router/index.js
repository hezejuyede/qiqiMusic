import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank.vue'
import search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import Recommend from '../components/recommend/recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Recommend'
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/Singer',
      name: 'Singger',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})
