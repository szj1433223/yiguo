<template>
  <div>
      <div>
        <h3>热门城市</h3>
        <ul>
        <li v-for="(item,index) in list" :key="index">{{item.AreaName}}</li>
        </ul>
      </div>
      <div v-for="(content,idx) in obj" :key="idx">
          <h4>{{content.FirstLetter}}</h4>
          <ul>
            <li v-for="(city,citydex) in content.CityList" :key="citydex">
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
};
</script>
