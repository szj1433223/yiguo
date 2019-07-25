<template>
    <div>
        <div class="header">
            <div class='userinfo'>
                <div class="head_photo">
                    <img :src="headPhoto" alt="用户头像">
                </div>
                <div class="login_register">
                    <router-link to="/login">登录/注册</router-link>
                </div>
            </div>
            <div class="account">
                <router-link to=''>
                    <p>{{remaining}}</p>
                    <p>卡包余额</p>
                </router-link>
                <router-link to=''>
                    <p>{{youbi}}</p>
                    <p>悠币</p>
                </router-link>
            </div>
        </div>
        <div class="listTab">
            <ul>
                <li v-for="(item,index) in listTab" :key="index"  >
                    <router-link to=''>
                        <img :src='item.IconUrl'/>
                        <p> {{item.IconText}}</p>
                        
                    </router-link>
                </li>
                <li  class="allOrder">
                    <router-link to=''>
                        <img src='//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png'/>
                        <p>全部订单</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="iconList">
            <ul>
                <li v-for="(item,index) in iconList" :key="index">
                    <router-link to=''>
                        <img :src="item.IconUrl" />
                        <p> {{item.IconName}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data(){
        return{
            headPhoto:'//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg',
            remaining:'-',
            youbi:'-',
            head:{
                body:'',
                head:{
                    CityCode: "2",
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "8966382bf52c8b798debe915e244a894",
                    DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
                    LoginToken: "j+gyDfLUSTCorS9El3xmUMQAKWRomGxxC4FiJXzJiPBloaQ4FPLwk1eI7r+FZP7UlTK4fM2dcY0Jpq9ZA8YV8i1TblDy1gcgd9DvSgNGFtMgyzRFr5FVFg/ThhBdOIQc33nn+AtZNreTdaaol/NuS4NKy2IeumDlqoQDSBmUtbk=",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: "j+gyDfLUSTCorS9El3xmUMQAKWRomGxxC4FiJXzJiPBloaQ4FPLwk1eI7r+FZP7UlTK4fM2dcY0Jpq9ZA8YV8i1TblDy1gcgd9DvSgNGFtMgyzRFr5FVFg/ThhBdOIQc33nn+AtZNreTdaaol/NuS4NKy2IeumDlqoQDSBmUtbk=",
                }
            },
            listTab:[],
            iconList:[]
        }
    },
    created(){
      this.$axios.post('api/api/user/User/GetUserInfo',this.head,{
          headers:{
              appName:3000025
          }
      }).then((res)=>{
          console.log(res)
          this.listTab = res.data.Data.UserInfo.OrderIcons;
          this.iconList= res.data.Data.UserInfo.IconList;
      })
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 3.98rem;
    background:url("//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg");
    box-sizing: border-box;
    padding: .54rem 0 0 0;
    position: relative;
    .userinfo{
        height: 1.52rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 .3rem;
        .head_photo{
            width:1.52rem;
            height:1.52rem;
            margin-right: .3rem;
            img{
                border-radius: 50%;
            }
        }
        .login_register{
            a{
                font-size:.32rem;
                color:#fff;
            }
        }
    }
    .account{
        width: 100%;
        height: 1.06rem;
        box-sizing: border-box;
        padding: .2rem;
        background: #fff;
        position: absolute;
        bottom: 0;
        font-size: .20rem;
        overflow: hidden;
        a{
            width: 3.55rem;
            height:1.06rem;
            display: flex;
            flex-direction: column;
            float:left;
            overflow: hidden;
            align-items: center;
        }

    }
}
.listTab{
    width:100%;
    height:1.62rem;
    margin-top:.3rem;
    background: #fff;
    ul{
        height: 1.62rem;
        display: flex;
        float: left;
        li{
            width: 1.5rem;
            height: 1.62rem;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            text-align: center;
            img{
                width:.44rem;
                display: inline-block;
            }
            p{
                width:100%;
                margin-top:.2rem;
            }
        }
    }
    .allOrder{
        position: relative;
        &::before{
            content: '';
            width:.09rem;
            height: 100%;
            display: block;
            position: absolute;
            top:0;
            left:0;
            background:url("//img07.yiguoimg.com/d/web/180313/01318/155922/xian.png") no-repeat;
            background-size: contain;
        }
    }
}
.iconList{
    margin-top: .3rem;
    background: #fff;
    overflow: hidden;
    ul{
        position: relative;
       
        li{
            a{
                width:1.86rem;
                height:1.62rem;
                float: left;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                text-align: center;
                img{
                    width:.64rem;
                    height:.64rem;
                }
                p{
                    width: 1.86rem;
                }
            }
            
        }
    }
}
</style>
