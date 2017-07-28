<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      个人页面
    </div>
  </div>
</template>


<script>

  export default {
    name: 'userIndex',
    data(){
      return {

      }
    },
    created: function () {
        debugger;
      this.$http.get('http://localhost:8080/user/index').then(response=>{
        if(response.data.success){
          alert(response.data.content);
        }else{
          alert("请刷新重试");
        }
      })
    },
    methods: {

    },
  }
</script>
