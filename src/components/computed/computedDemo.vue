<template>
  <div class="filter">
    <input type="text" v-model="msg"/>
    <p/>
    {{computedMsg}}
    <p/>
    {{computedMsg2}}
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '你是傻逼吗'
      }
    },
    methods: {},
    computed: {
      computedMsg: {
        set: function (newValue) {
          this.msg = newValue
        },
        get: function () {
          return this.msg
        }
      }, computedMsg2: function () {
        return `${this.msg}  222333`;
      }
    },
    watch: {
      msg: function (newValue) {
        console.log(newValue)
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
