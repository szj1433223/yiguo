<template>
    <div class="box" ref="box">
        <div>
            <div class="clean">
                <img src="../../imgs/shopcar.png" alt="">
                <span>购物车空空的，快去逛逛把！</span>
                <div>去逛逛</div>
            </div>
            <div class="cai">
                <div class="xi">猜你喜欢</div>
                <ul>
                    <li v-for="(item,index) in love" :key="index">
                        <img :src=item.SmallPic alt="" class="aaa">
                        <span>{{item.CommodityName}}</span>
                        <span class="re">￥{{item.SellPrice}}</span>
                        <img src="../../imgs/tianjia.png" alt="" class="ccc">
                    </li>
                </ul>
            </div>
        </div>
        <Settlement/>
    </div>
</template>

<script>
import Vuex from "vuex"
import Settlement from '../../components/shopcar/settlement'
export default {
    created () {
        this.getLove()
    },
    computed: {
        ...Vuex.mapState({
            love : state => state.shopcar.love
        })
    },
    methods: {
        ...Vuex.mapActions({
            getLove:"shopcar/getShopcar"
        })
    },
    mounted () {
      this.$loading.show(
          {
              text:'拼命加载中...',
              el: this.$refs.box
          }
      )
      setTimeout(()=>{
          this.$nextTick(()=>{
              this.$loading.hide()
          })
      },3000)  
    },
    components:{
        Settlement
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 12.3rem;
    overflow: auto;
}
.clean{
    width: 100%;
    height: 7rem;
    /* background: skyblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #ccc 
}
.clean img{
    width: 2rem;
}
.clean span{
    font-size: .3rem;
    margin: .5rem 0;
}
.clean div{
    width: 2.8rem;
    height: .8rem;
    border: 2px solid #11b57c;
    border-radius: 10%;
    color: #11b57c;
    font-size: .34rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.xi{
    width: 100%;
    height: 1rem;
    font-size: .32rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

li{
    width: 3.4rem;
    height:5rem;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: .25rem;
    margin-bottom: .5rem;
    position: relative
}
.aaa{
    width: 3.4rem;
    height:3.4rem
}
li span{
    font-size: .3rem;
    width: 3.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top:.18rem 
}
.re{
    color: red;
    font-weight: bold
}
.ccc{
    width: .6rem;
    height: .6rem;
    position: absolute;
    right: .6rem;
    bottom: .2rem;
    
}

</style>