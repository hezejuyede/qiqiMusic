<template>
  <div class="singger" ref="singer">
    <listview @select="selectSinger" :data="singers"></listview>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  //引入ListViewz组件
  import ListView from '../../base/listview/listview.vue'
  // 引入getSingerList方法
  import {getSingerList} from '../../api/singer'
  //引入调入成功的公共常量
  import {ERR_0K} from '../../api/config'
  //引入调用时公共常用的JS
  import Singer from '../../common/js/singer'
  import Listview from "../../base/listview/listview.vue";
  //定义热门
  const HOT_NAME = '热门';
  //定于数量
  const HOT_SINGER_LEN = 10;


  export default {
    components: {Listview},
    name: 'singer',
    data() {
      return {
        //定义歌手列表数组
        singers: []
      }

    },
    created() {
      //页面加载成功就调用_getSingerList()方法
      setTimeout(()=>{
        this._getSingerList();
      },2000)
    },
    methods: {
      selectSinger(singer){
        this.$router.push({
          path:`/singer/${singer.id}`
        });
        this.setSinger(singer)
      },
      //调用取得歌手的方法，
      _getSingerList() {

        //使用promise方法，解决异步回调
        getSingerList().then((res) => {

          //如果成功测将请求的data.list数据
          if (res.code === ERR_0K) {
            //将调用的data.list数据赋值给定义的歌手数组
            this.singers = this._normalizeSinger(res.data.list);
          }
        });
      },
      //取得的数据不是我们需要的类型，要遍历和处理得到的数据，先定义_normalizeSinger方法。
      _normalizeSinger(list) {
        //定义一个map对象
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        };
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex;
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }));
        });
        //为了得到有序列表，我们需要处理map
        let ret = [];
        let hot = [];
        for (let key in map) {
          let val = map[key];
          //如果title 的值含有字母，则添家到ret数组里
          if (val.title.match(/[a-zA-z]/)) {
            ret.push(val)
          }
          //没有测添加到HOT数组里
          else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        //将得到的数组按字母升序排列
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        });
        //将热门和字母排序数组链接到一起
        return hot.concat(ret)
      },
      ...mapMutations({
        setSinger:'SET_SINGER'
      })

    },
    componenfs: {
      ListView,
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%

</style>
