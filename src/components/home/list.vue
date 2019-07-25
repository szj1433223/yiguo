<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.pictureUrl" />
        <p>{{item.navName}}</p>
      </li>
    </ul>
    <img :src="this.img" class="gif" />
    <div class="lb">
        <div class="ygkb">
                <img src="//img06.yiguoimg.com/e/web/161222/018522/134216/news.png" />
        </div>
      <div class="swiper">
        <div class="swiper-container" id="a">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in contan" :key="index">
              <p>{{item.fastReportTitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      contan: [],
      img: "",
      head: {
        body: {
          operationType: 0,
          previewTime: ""
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
        this.list = res.data.Data.templateComponentList[0].navComponentList;
        this.img =res.data.Data.templateComponentList[0].adPictures[0].pictureUrl;
        this.contan = res.data.Data.templateComponentList[0].fastReportsList;
      });
  },
   mounted(){
		 
	},
	watch:{
		list(){
			this.$nextTick(()=>{
                var swiper = new Swiper('#a', {
                direction: 'vertical',
                loop:true,
                autoplay:true
              });
			})
    }
	}
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.list > li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
}
.list > li > img {
  width: 1.44rem;
}
.gif {
  width: 100%;
}
.lb{
    width: 100%;
    height: 0.66rem;
    display: flex;
    align-items: center;

}
.ygkb{
  width: 1.36rem;
    height: 0.26rem;
}
.ygkb>img{
 
    width: 1.36rem;
    height: 0.26rem;
    margin-left: 0.3rem;
}
.swiper{
    width: 4.72rem;
    height: 0.35rem;
    margin: 0.13rem 0.19rem 0.13rem 0.72rem;
    overflow: hidden;
}
.swiper p {
    line-height: 0.35rem;
}

</style>