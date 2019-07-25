<template>
    <div class="box">
        <div class="username">
            <i>
                <img src="//img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png" alt="">
            </i>
            <input type="text" placeholder="请输入您的用户名" v-model="username">
        </div>
        <div class="password">
            <i>
                <img src="//img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png" alt="">
            </i>
            <input type="password" placeholder="请输入您的密码" v-model="password">
        </div>
        <div class="register">
            <button class='register' @click="handleRegisterCb">注册</button>
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
        handleRegisterCb(){
            this.$axios.post('/dd/users/register',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                console.log(res)
               if(res.data.status===0){
                    Toast({
                        message: '注册成功',
                        position: 'middle',
                        duration: 3000,
                    });
                    setTimeout(() => {
                        this.$router.push({path:'/login'})
                    }, 1000);
               }else{
                    Toast({
                        message: '用户名重复',
                        position: 'middle',
                        duration: 3000,
                    });
               }
            })
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
    .password{
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
    .register{
        width: 100%;
        height: 1.22rem;
        display: flex;
        justify-content: center;
        align-items:center;
        button{
            width:2.82rem;
            height:.8rem;
            font-size: .30rem;
            border:none;
            background: #008842;
            color: #fff;
            border-radius: 8px;
        }
    }
}

</style>
