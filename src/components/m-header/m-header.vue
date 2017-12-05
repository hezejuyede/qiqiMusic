<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">音乐</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}


</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/variable.styl"
  .m-header
    position relative
    height: 44px
    font-size 0
    color $color-theme
    display flex
    align-items center
    flex-direction row
    justify-content center
    .icon
      width: 122px
      height: 44px
      bg-image('logo')
      background-size 122px 44px

    .text
      font-size $font-size-large-x
      color #ffffff

    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme


</style>
