<template>
  <div class="filter">
    {{`这里是子类:`}}
    <br/>
    <div>
      <span>{{`这里是slot开始`}}</span>
      <slot></slot>
      <span>{{`这里是slot结束`}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
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
