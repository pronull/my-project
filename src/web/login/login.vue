<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <!--<form action="http://localhost:8080/api/login" method="post">-->
      <label for="username">账号</label>:
      <input type="text" id="username" name="username" v-model="loginInfo.username" autofocus="autofocus"/> <br/>
      <label for="password">密码</label>:
      <input type="password" v-model="loginInfo.password" id="password" name="password"/> <br/>
      <input type="submit"  @click="signIn" value="Log in"/>
    <!--</form>-->


  </div>
</template>


<script>

  export default {
    name: 'login',
    data(){
      return {
        loginInfo: {
          username: '',
          password: "",
        }
      }
    },
    created: function () {
//      this.loginInfo
//      this.$http.get('http://localhost:8080/login').then(response => {
//          debugger
////          this.loginInfo['X-CSRF-TOKEN'] =  response.headers.get('X-CSRF-TOKEN');
//      });
    },
    methods: {
      signIn(){
        var options = { emulateJSON :true };
        this.$http.post('http://localhost:8080/api/login', this.loginInfo,options).then(response => {
          if (response.data.success) {
//            window.location.href = '#/myIndex'
          } else {
            alert("账号或密码错误")
          }
        })
      },
    },
  }
</script>
