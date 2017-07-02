

<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <ul>
      <li><router-link to="/">computed</router-link></li>
      <li>filter</li>
      <li>props</li>
      <li>slot</li>
    </ul>
  </div>
</template>

<script>
  import computed from './computed/computedDemo'
export default {
  name: 'vuebase',
  data(){
      return {}
  },
  components:{
    computed
  }
}
</script>

<style>
  li{
    width: 100px;
  }
</style>
