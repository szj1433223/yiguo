<template>
    <div class="box">
        <div class="username">
            <i>
                <img src="//img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png" alt="">
            </i>
            <input type="text" placeholder="请输入您的用户名"  v-model="username">
        </div>
        <div class="password">
            <i>
                <img src="//img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png" alt="">
            </i>
            <input type="password" placeholder="请输入您的密码" v-model="password">
        </div>
        <div class="yanzhengma">
            <i></i>
            <input type="text" placeholder="请输入验证码">
        </div>
        <div class="forget">
            <router-link to=''>忘记密码?</router-link>
        </div>
        <div class="login_register">
                <button class="login" @click="handleLoginCb">登录</button>
                <button class='register' @click="handleRegisterCb">立即注册</button>
        </div>
        <div class="logo">
            <img src="//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt="">
        </div>
    </div>
    
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        handleLoginCb(){
            this.$axios.post('/dd/users/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                if(res.data.status===0){
                    Toast({
                        message: '登录成功',
                        position: 'middle',
                        duration: 3000,
                    });
                    setTimeout(()=>{
                        this.$router.push({path:'/home'})
                    },500)
                }else{
                    console.log('登录失败')
                    Toast({
                        message: '登录失败',
                        position: 'middle',
                        duration: 3000,
                    });
                }
            })
        },
        handleRegisterCb(){
            this.$router.push('/register')
        }
    }
}
</script>


<style lang="scss" scoped>
    
    .box{
        box-sizing: border-box;
        padding-left: .2rem;
        background: #fff;
        .username,
        .password,
        .yanzhengma{
            width:100%;
            height:1.22rem;
            font-size:.16rem;
            border-bottom: 1px solid #e7e7e7;
            display: flex;
            align-items:center;
            i{
                display: block;
                width: .36rem;
                height:.4rem;
                float: left;
            }
            input{
                width:4.5rem;
                height: .4rem;
                font-size:.32rem;
                border:none;
                outline: none;
                margin-left: .2rem;
            }
        }
        .forget{
            height:1.22rem;
            font-size:.3rem;
            line-height: 1.22rem;
            a{
                color:#008842;
            }
        }
        .login_register{
            width: 100%;
            height: 1.22rem;
            display: flex;
            justify-content: space-around;
            button{
                width:2.82rem;
                height:.8rem;
                font-size: .30rem;
                border:none;
                border-radius: 8px;
            }
            .login{
                background: #008842;
                color: #fff
            }
            .register{
                background: #fff;
                color: #008842;
                border: 1px solid #008842
            }
        }
        .logo{
            position: absolute;
            width: 100%;
            bottom:.4rem;;
            text-align: center;
            img{
                width: 2.08rem;
                display: inline-block;
            }
        }
    }
</style>

