<template>
  <transition name="slide">
    <music-list
      :songs="songs"
      :title="title"
      :bg-image="bgImage"
    ></music-list>
  </transition>


</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetails} from '../../api/singer'
  import {ERR_0K} from '../../api/config'
  import {createSong} from '../../common/js/songs'
  import MusicList from '../../components/music-list/music-list.vue'

  export default {
    name: 'singer-detail',
    components:{
      MusicList
    },
    data(){
      return{
        songs:[]
      }
    },
    computed: {
      title(){
        return this.singer.name
      },
      bgImage(){
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail()
    },
    methods:{
      _getDetail()
      {
        if(!this.singer.id){
          this.$router.push('/singer');
          return
        }
        getSingerDetails(this.singer.id).then((res) => {
          if (res.code === ERR_0K) {
            this.songs=this._normalizeSongs(res.data.list);
            console.log(res.data.list);
            console.log(this.songs)
          }
        })
      },
      _normalizeSongs(list){
        let ret = [];
        list.forEach((item)=>{
          let {musicData} = item;
          if (musicData.songid && musicData.albummid){
           ret.push(createSong(musicData))
          }
        });
        return ret
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .slide-enter-active, .slide-leave-active
    transform: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
