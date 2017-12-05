<template>
  <div id="app">
    <m-header></m-header>
    <tab-nav></tab-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header.vue'
  import TabNav from './components/tab/tab.vue'

  export default {
    components: {
      MHeader,
      TabNav
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
