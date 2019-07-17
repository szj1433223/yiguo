<template>
    <div id="tabbar">
        <div class="footer">
            <ul>
                <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabbar",
    data() {
        return {
            tabbar:[
                {
                    title:"首页",
                    icon:"&#xe667;",
                    path:"/home"
                },{
                    title:"分类",
                    icon:"&#xe7f9;",
                    path:"/categories"
                },{
                    title:"吃饭吧",
                    icon:"&#xe606;",
                    path:"/eat"
                },{
                    title:"购物车",
                    icon:"&#xe60d;",
                    path:"/cart"
                },{
                    title:"我的",
                    icon:"&#xe61a;",
                    path:"/user"
                }
            ]
        }
    },
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    background: #fff
}
ul{
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
ul>li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.iconfont{
    font-size: 44px
}
ul>.router-link-active{
    color: rgb(16, 204, 41);
}
</style>
