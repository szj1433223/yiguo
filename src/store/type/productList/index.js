import axios from 'axios'
export default {
    state:{
        list:[]
    },
    mutations:{
        getmProduct(state,data){
            state.list=data
        }
    },
    actions:{
        getProductList({commit}) {
            axios.post(
                "/api/api/commodityapi/Commodity/GetSearchList",
                {
                  body: {
                    CategoryCode: "",
                    CategoryId: "ad7f227d-73c0-44a2-9edd-924006deb134",
                    Keyword: "",
                    PageIndex: 1,
                    Sort: 4
                  },
                  head: {
                    CityCode: 2,
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "61b51c16f34335d8bdaefd1cba0fd383",
                    DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
                    LoginToken: "EqIWQfyRJpwJlddrK3nDZRQvP4fugGcGYJU4uGFZKzxR6g8aIx0Uj1rHy92n4F1s7rW2uIBUR10qPmcY3hYjkw/0JfbcuhFkeKLfYulcZ+GW5xYAv8u2Sk2rUkIDYg5Y79lT0d6tobg3ejEf2nnTZZRIGXNEb+AdMaT0eS3cuFA=",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: "EqIWQfyRJpwJlddrK3nDZRQvP4fugGcGYJU4uGFZKzxR6g8aIx0Uj1rHy92n4F1s7rW2uIBUR10qPmcY3hYjkw/0JfbcuhFkeKLfYulcZ+GW5xYAv8u2Sk2rUkIDYg5Y79lT0d6tobg3ejEf2nnTZZRIGXNEb+AdMaT0eS3cuFA="
                  }
                }, 
                {
                  headers: {
                    appName: 3000025
                  }
                }
              )
              .then(data => {
                commit("getmProduct",data)
                console.log(data);
              });
          },
    }
}