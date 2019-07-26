<template>
    <div id="he">
        <div class="box">
            <div class="ssk">
                <div><img src="../../../imgs/ss.png" alt=""></div>
                <input type="text" placeholder="请输入商品名称" @click="hander">
            </div>
            <div class="ss" >
                搜索
            </div>
        </div>
        <div class="mb" v-if="mb==true" @click="changef">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mb:false
        }
    },
    methods: {
        hander(){
            this.mb=true
        },
        changef(){
            this.mb=false
        }
    },
}
</script>

<style scoped>
#he{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999
}
.box{
    width: 100%;
    height: .8rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #e6e6e6
}
.ssk{
    width: 80%;
    height: .54rem;
    display: flex;
    justify-content: start;
    align-items: center
}
.ssk div{
    width: 10%;
    height: 100%;
    background: #f4f4f4;
    border-radius: .23rem 0 0 .23rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.ssk div img{
    width: .3rem;
    height: .3rem
}
.ssk input{
    width: 90%;
    height: 100%;
    border: none;
    background: #f4f4f4;
    border-radius: 0 .23rem .23rem 0;
    font-size: 24px;
    outline: none
}
.ss{
    color: #11B57C;
    font-size: .30rem;
    width: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.mb{
    width: 100%;
    height: 20rem;
    background: rgba(0, 0, 0, 0.3)
}
</style>
