<template>
  <div ref="box">
    <!-- 搜索 -->
    <Search/>
    <!-- 导航条 -->
    <Navigation/>
    <!-- 产品列表 -->
    <Product/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Search from "../../components/type/search";
import Navigation from "../../components/type/navigation";
import Product from "../../components/type/product";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$loading.show({
      text: "拼命加载中...",
      el: this.$refs.box
    });
    setTimeout(() => {
      this.$nextTick(() => {
        this.$loading.hide();
      });
    }, 3000);
  },
  components: {
    Search,
    Navigation,
    Product
  }
};
</script>

<style scoped>
</style>