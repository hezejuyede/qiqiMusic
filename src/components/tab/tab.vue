<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/Recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  .tab
    display flex
    flex-direction row
    height 45px
    font-size $font-size-large
    .tab-item
      flex 1
      display flex
      justify-content center
      align-items center
      .tab-link
        color $color-text-ll
      &.router-link-active
        .tab-link
          color $color-theme
          border-bottom 2px solid $color-theme


</style>
