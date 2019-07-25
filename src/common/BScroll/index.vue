<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScorll from 'better-scroll';
export default {
    mounted () {
        this.scroll = new BScorll(this.$refs.wrapper,{
            tap:true,
            pullUpLoad:true
        })
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>
