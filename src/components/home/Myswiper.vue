<template>

  <div class="swiper-container" id="b">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list"  :key="index">
          <img :src="item.pictureUrl">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
    props: ["carouselArr","isShow"],
    data(){
        return {
            list:[],
            head:{
                body: {
                    operationType: 0,
                    previewTime: "",
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
        }
    },
    created(){
        this.$axios.post("api/api/home/TemplateComponent/GetTemplateComponentInfo",this.head,{
            headers:{
                appName: 3000025
            }
        }).then((res)=>{
            this.list = res.data.Data.templateComponentList[0].carouselPictures
        })
    },
    mounted(){
		 
	},
	watch:{
		list(){
			this.$nextTick(()=>{
					var mySwiper = new Swiper ('#b', {
				    loop: true, 
				    autoplay: {
				    delay: 3000,    
				     disableOnInteraction: false,
                    },
				    pagination: {
				      el: '.swiper-pagination',
                    }
	     		})      
			})
		}
	}
}
</script>
<style scoped>
img{
    width: 100%;
}



</style>