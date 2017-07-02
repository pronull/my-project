<script>
  import propDemo from './propDemo'
  export default {
    name: 'hello',
    components: {
      propDemo
    },
    data () {
      return {
        msg: '你是傻逼吗',
        msg2: '222'
      }
    },
  }
</script>

<template>
  <div>
    {{`supper:${this.msg}`}}
    <br/>
    {{`supper2:input:  `}}<input v-model="msg2"/>
    <br/>
    {{`supper2:value:  ${this.msg2}`}}
    <br/>{{`prop:`}}
    <prop-demo :prop-value="msg"></prop-demo>
    <br/>{{`prop2`}}
    <prop-demo :prop-value.sync="msg2"></prop-demo>
  </div>
</template>

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
