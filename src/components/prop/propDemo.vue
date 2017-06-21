<template>
  <div class="filter">
    {{`nochange:${subPropValue} - change:${this.propValue}`}}
    <div>
      <input type="button" @click="changePropValue" value="改变值为#$%^"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:['propValue'],
  data () {
    return {
      subPropValue :this.propValue,
    }
  },
  methods:{
    changePropValue(){
      this.subPropValue = `#$%^`;
      console.log(`change value : ${this.subPropValue}`)
      this.$emit('update:propValue',this.subPropValue)
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
