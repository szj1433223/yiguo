import axios from 'axios'
export default{
    state:{
        love:[]
    },
    mutations:{
        getmShopcar(state,data){
            state.love=data
        }
    },
    actions:{
        getShopcar({commit}){
            axios.post("/api/api/commodityapi/Commodity/GetGuessRecommentCommodity",{
                Body: {
                    GuessRecommendType: 1
                },
                Head: {
                    CityCode: 2,
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "61b51c16f34335d8bdaefd1cba0fd383",
                    DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
                    LoginToken: "EqIWQfyRJpwJlddrK3nDZRQvP4fugGcGYJU4uGFZKzxR6g8aIx0Uj1rHy92n4F1sFUO2px24wMJ3+SYK1kdVAKNfjWrcrJohApWp4Q2HZ0WFCJn/rh0qTUSEiF/9s/MAXvKn1+XyJHdnnaKuLKdQX8Y7tgNFav8anuuzM0KLQJo=",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: "EqIWQfyRJpwJlddrK3nDZRQvP4fugGcGYJU4uGFZKzxR6g8aIx0Uj1rHy92n4F1sFUO2px24wMJ3+SYK1kdVAKNfjWrcrJohApWp4Q2HZ0WFCJn/rh0qTUSEiF/9s/MAXvKn1+XyJHdnnaKuLKdQX8Y7tgNFav8anuuzM0KLQJo="
                }   
            },{
                headers: {
                    appName: 3000025
                }
            }).then(data=>{
                commit("getmShopcar",data.data.Data.CommodityList)
                // console.log(data.data.Data.CommodityList);
            })
        }
    },
    namespaced: true
}