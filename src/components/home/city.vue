<template>
  <div>
      <div class="top">
        <h3>热门城市</h3>
        <ul>
        <li v-for="(item,index) in list" :key="index"  @click="site(item.AreaName)">{{item.AreaName}}</li>
        </ul>
      </div>
      <div v-for="(content,idx) in obj" :key="idx" class="cont">
          <h4>{{content.FirstLetter}}</h4>
          <ul>
            <li v-for="(city,citydex) in content.CityList" :key="citydex"  @click="site(city.AreaName)">
                {{city.AreaName}}
            </li>
          </ul>
      </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
        list:[],
        obj:[],
      head: {
        Body: {},
        Head: {
          DeviceId: "7cf1f79bf3395c0fa8526ffeb50bc458",
          LoginToken: "",
          Token: ""
        }
      }
    };
  },
    created() {
    this.$axios
      .post(
        "api/api/user/Area/GetCityList",
        this.head,
        {
          headers: {
            appName: 3000025
          }
        }
      )
      .then(res => {
          this.list = res.data.Data.HotCityList[0].CityList
          this.obj = res.data.Data.CityList
      });
  },
   methods:{
    site(val){
      this.$store.commit('sites',val)
      this.$router.push("@views/home/index.vue")
    }
  }
};
</script>
<style scoped>
.top,h3,h4{
  background:#f4f4f4
}
.top>ul{
  display: flex;
  flex-wrap:wrap;

}
.top>ul>li{
padding: 0.1rem 0.4rem;
border: 1px solid #000;
background: #fff;
margin: 0.2rem 0.6rem 

}
.cont{
  background: #fff;
}
.cont>ul{
  display: flex;
  flex-wrap:wrap
}
.cont>ul>li{
height: 0.54rem;
width: 33.33%;
font-size:0.28rem;
margin: 0.3rem 0;
text-align: center;
line-height: 0.54rem;
}
</style>
