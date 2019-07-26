<template>
    <div class="box">
        <!-- <BScroll> -->
        <ul>
            <router-link 
            tag="li" 
            v-for="(item,index) in list[indx].Childs" 
            :key="index" 
            to="/categories/productList" 
            >
                <span>
                    <img :src=item.PictureUrl alt="" >
                </span>
                <span>{{item.CategoryName}}</span>
            </router-link>
        </ul>
        <!-- </BScroll> -->
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    data () {
        return {
            lists:[]
        }
    },
    created () {
        this.getData()
    },
    computed: {
        ...Vuex.mapState({
            list : state => state.type.arr,
            indx: state => state.type.ind
        })
    },
    methods: {
        ...Vuex.mapActions({
            getData:"type/getData"
        })
    },
}
</script>

<style scoped>
.box {
  width: 5.5rem;
  height: 11.5rem;
  background:#fff;
  position: fixed;
  left: 2rem;
  top: 0.83rem;
  overflow: auto;
  
}
ul{
    /* width: 5.5rem; */
  height: 13rem;
  /* padding-bottom: 1rem */
}
li{
    float: left;;
    width: 1.5rem;
    height: 2rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .2rem 0 0 .26rem;
    z-index: 30
}
li span img{
    width: 1.4rem;
    height: 1.4rem
}
li span{
    font-size: .3rem
}
</style>
