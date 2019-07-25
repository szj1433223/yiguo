<template>
    <div id="box">
        <Top/>
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
export default {
   components:{
       Top,
       Myswiper,
       List,
       Figure,
       Content
   }
}
</script>

<style scoped>
#box{
    margin-bottom: 1rem;
     margin-top:0.75rem;
}
</style>
