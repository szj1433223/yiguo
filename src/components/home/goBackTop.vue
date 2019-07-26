<template>
    <div class="go" @click="go">
      <img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png">
    </div>
</template>

<script>
export default {
    methods:{
    go(){
        document.documentElement.scrollTop=0;
        // console.log(document.documentElement.scrollTop)
    }
  },
}
</script>


<style scoped>
.go{
  position: fixed;
  right: 0.4rem;
  bottom: 2.5rem;
  z-index: 100;

}
.go>img{
  width: 0.8rem;
  height: 0.8rem;
}
</style>
