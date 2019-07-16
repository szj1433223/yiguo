<template>
  <div id="app">
      <router-view></router-view>
      <TabBar v-if="this.$route.meta.tabbarflag"/>
  </div>
</template>

<script>
import TabBar from "@/common/tabbar"
export default {
  name:"app",
  components:{
    TabBar
  }
}
</script>

<style lang="scss">

</style>
