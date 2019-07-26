<template>
    <div id="box" ref="box">
        <Top/>
        <GoTop/>
        <Myswiper/>
        <List/>
        <Figure/>
        <Content/>
       
        
        
    </div>
</template>

<script>
import Top from "@/components/home/index"
import Myswiper from "@/components/home/Myswiper"
import List from "@/components/home/list"
import Figure from "@/components/home/figure"
import Content from "@/components/home/content"
import GoTop from '@/components/home/goBackTop'
export default {
     mounted() {
    this.$loading.show({
      text: "拼命加载中...",
      el: this.$refs.box
    });
    setTimeout(() => {
      this.$nextTick(() => {
        this.$loading.hide();
      });
    }, 1000);
  },
   components:{
       Top,
       Myswiper,
       List,
       Figure,
       Content,
       GoTop
   }
}
</script>

<style scoped>
#box{
    margin-bottom: 1rem;
     margin-top:0.75rem;
}
</style>
