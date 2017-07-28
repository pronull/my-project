<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <label for="username">用户名:</label>:
    <input type="text" id="username" name="username" v-model="register.userName" autofocus="autofocus"/> <br/>
    <label>登录账号</label>:
    <input type="text" v-model="register.account" name="account"/> <br/>
    <label for="password">密码</label>:
    <input type="password" v-model="register.password"  id="password" name="password"/> <br/>
    <label>邮箱</label>:
    <input type="text" v-model="register.email" /> <br/>
    <input type="submit" @click="signIn" value="注册"/>
  </div>
</template>


<script>

  export default {
    name: 'login',
    data(){
      return {
        register: {
          userName: '',
          account: '',
          password:"",
          email:'',
        }
      }
    },
    created: function () {

    },
    methods: {
      signIn(){
        this.$http.post('http://localhost:8080/api/sign/up',this.register).then(response=>{
            if(response.data.success){
                alert(response.data.content);
            }else{
                alert("注册失败")
            }
        })
      },
    },
  }
</script>
