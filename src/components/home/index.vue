<template>
    <div id="top">
        <div class="city">
            <router-link to="/city">上海</router-link>
            <span></span>
        </div>
        <div class="search">
            <router-link to="/categories">
                <p></p>
                <span>请输入商品名称</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#top{
    width: 100%;
    height: 0.75rem;
    background: linear-gradient(90deg,#39da85,#01b27a);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
.city{
    width: 1.33rem;
    height: 0.36rem;
    line-height: 0.75rem;
    position: absolute;
    left: 0;
    top:.0rem;
    color: #fff;
    font-size: 0.28rem;
}
.city>a{
    margin: 0 0.2rem;
    color: #fff;
}
.city>span{
    display: inline-block;
    width: 0.15rem;
    height: 0.07rem;
    background: url(//img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0.33rem;
    left:0.95rem;
}
.search{
    width: 5.98rem;
    height: 0.54rem;
    background: #fff;
    border-radius: 0.27rem;
    position: absolute;
    left: 1.33rem;
    top:0.1rem;
}
.search>a>p{
    position: absolute;
    top: 0.05rem;
    left: 0.1rem;
    width: 0.45rem;
    height: 0.45rem;
    background: url(//img07.yiguoimg.com/d/web/190515/00191/152133/home-search.png) no-repeat;
    background-size: 100% 100%;
}

.search>a>span{
    position: absolute;
    top: .01rem;
    left: .55rem;
    width: 80%;
    height: .54rem;
    line-height: .54rem;
    font-size: .22rem;
    color: #999;
}
</style>




