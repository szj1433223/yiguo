<template>
    <div>
               <div v-for="(item,index) in list" :key="index" v-if="index!==0">
                   <img :src="item.adPictures[0].pictureUrl" >
               </div>
               <div v-for="item in obj" :key="item.hrefType">
                   <img :src="item.adPictures[0].pictureUrl" >
               </div>
    </div>

</template>
<script>
export default {

  data() {
    return {
      list: [],
      obj:[],
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
      },
      header:{
          body: {
            homePageId: "4d2a61b6-682e-4bd2-9c26-ae5ef71982a3",
            operationType: 1,
            pageIndex: 1,
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
    }
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
      .then((res) => {
        this.list = res.data.Data.templateComponentList
      })


       this.$axios
        .post(
            "api/api/home/TemplateComponent/GetTemplateComponentInfo",
            this.header,
            {
            headers: {
                appName: 3000025
            }
            }
        )
        .then((res) => {
            this.obj = res.data.Data.templateComponentList
        })
  },
   
  

}
</script>
<style scoped>
img{
    width: 100%;
}

</style>
