<template>
  <div class="filter">
    <input type="text" v-model="msg" v-on:keyup.enter="getBaidu()"/>
    <p/>
    {{watchMsg}}
    <p/>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '你是傻逼吗',
        watchMsg:'',
      }
    },
    methods: {
      getBaidu(){
        this.$http.get('http://localhost:8089/#/watchDemo').then(response => {
          this.watchMsg = response.body;
        }, response => {
          //error
        });

      },
    },
    watch: {
      msg: function (newValue) {
        this.watchMsg = newValue;
        return newValue;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
