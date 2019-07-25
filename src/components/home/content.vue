<template>
  <div >
    <div class="module" v-for="(item,index) in list" :key="index" >
      <img :src="item.adPictures[0].pictureUrl" />
      <div class="li">
        <div
          v-for="content in item.commoditysComponentList"
          :key="content.commodityComponentId"
          class="lidiv"
        >
          <img :src="content.pictureUrl" class="liimg" />
          <p><span  v-if="content.saleSlogan!==null">{{content.saleSlogan}}</span></p>
          <p>{{content.commodityName}}</p>
          <p>￥{{content.commodityPrice}}</p>
          <img class="cart" src="//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png" />
        </div>
      </div>
    </div>

    <div class="go" @click="go">
      <img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      head: {
        body: {
          homePageId: "4d2a61b6-682e-4bd2-9c26-ae5ef71982a3",
          operationType: 1,
          pageIndex: 2,
          previewTime: "",
          publishTime: "2019/07/19 17:33:10"
        },
        head: {
          cityCode: "1",
          cityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
          districtId: "825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0",
          loginToken: "",
          token: "",
          version: "h5"
        }
      }
    };
  },
  created() {
    this.$axios
      .post(
        "api/api/home/TemplateComponent/GetTemplateComponentInfo",
        this.head,
        {
          headers: {
            appName: 3000025
          }
        }
      )
      .then(res => {
        this.list = res.data.Data.templateComponentList;
      });
  },
  methods:{
    go(){
        document.documentElement.scrollTop=0;
        // console.log(document.documentElement.scrollTop)
    }
  },
  directives: {
    hide: {
      // 指令的定义
      inserted: function (el) {
        el.addEventListener("click",function(){
          console.log(1)
        })
      }
    }
}

};
</script>
<style scoped>
.module > img {
  width: 100%;
}
.li {
  display: flex;
  overflow: auto;
  height: 3.61rem;
  margin: 0;
  
}
.liimg {
  width: 2.48rem;
  height: 2.48rem;
}
.lidiv {
  width: 2.48rem;
  height: 3.49rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  margin: 0 0.15rem;
  position: relative;
}
.lidiv > p:nth-child(2){
  width: 0.1rem;
  height: 0.1rem;
}
.lidiv > p:nth-child(2)>span {

  display: inline-block;
  background: red;
  color: #fff;
  font-weight: 700;
  border-radius: 2rem 3.31rem 3.31rem 0;
  padding: 0.08rem 0.2rem;
  font-size: 0.2rem;
  position: absolute;
  left: 0;
  top: 2.1rem;
}
.lidiv > p:nth-child(3){
  width: 2.4rem;
  margin:0.15rem 0.1rem 0 0.1rem;
  overflow:hidden;
      text-overflow:ellipsis;
    white-space:nowrap
}
.lidiv > p:nth-child(4){
  color: red;
  font-weight: 900;
  margin:0.1rem 0.1rem;
}

.cart {
  background: #01b27a;
  border-radius: 50%;
  position:absolute;
  right: 0.2rem;
  bottom: 0.13rem;
}
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
