<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <form action="/login" method="post">
      <input type="text" name="X-CSRF-TOKEN"/><br>
      <label for="username">Username</label>:
      <input type="text" id="username" name="username" autofocus="autofocus" /> <br />
      <label for="password">Password</label>:
      <input type="password" id="password" name="password" /> <br />
      <input type="submit" value="Log in" />
    </form>
  </div>
</template>


<script>

  export default {
    name: 'login',
    data(){
      return {
        tips0: `lambda`,
        codes: {},
      }
    },
    methods:{},
  }
</script>
