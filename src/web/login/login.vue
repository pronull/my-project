<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <label>账号</label>:
    <input type="text" v-model="loginInfo.account" autofocus="autofocus"/> <br/>
    <label for="password">密码</label>:
    <input type="password" v-model="loginInfo.password" id="password" name="password"/> <br/>
    <input type="submit" @click="signUp" value="Log in"/>
  </div>
</template>


<script>

  export default {
    name: 'login',
    data(){
      return {
        loginInfo: {
          account: '',
          password: "",
          'X-CSRF-TOKEN':'',
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
      signUp(){

        this.$http.post('http://localhost:8080/api/login', this.loginInfo).then(response => {
          if (response.data.success) {
            alert(response.data.content);
          } else {
            alert("账号或密码错误")
          }
        })
      },
    },
  }
</script>
