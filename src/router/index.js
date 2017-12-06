import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank.vue'
import search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import Recommend from '../components/recommend/recommend.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'

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
      component: Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
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
