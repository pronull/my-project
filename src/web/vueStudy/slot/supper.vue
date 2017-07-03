<script>
  import slotDemo from './slotDemo'
  export default {
    name: 'hello',
    components: {
      slotDemo
    },
    data () {
      return {
        msg: '你是傻逼吗',
      }
    },
  }
</script>

<template>
  <div>
    <slot-demo>
      <div style="width: 100px;height: 100px;color: #9a5bf6;">1234</div>
      <span>这是基类</span>
    </slot-demo>
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
