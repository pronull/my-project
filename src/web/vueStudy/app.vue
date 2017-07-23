

<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <span>vue一些小知识点</span>
    <ul>
      <li>
        {{ this.tips1 }} <a href="https://cn.vuejs.org/v2/guide/syntax.html#纯-HTML" target="_blank">原文</a>
        <br/>
      </li>
      <li>
        例子:<span v-html="`<div>modal</div>`"></span>
        代码:{{this.tips4}}
      </li>
      <li>v-bind 是用来绑定html属性的 <a :href="tips2" target="_blank">链接到百度</a>   <br/>代码: {{ this.tips3 }}</li>
    </ul>
    <hr/>
    <ul>
      <li>computed</li>
      <li>filter</li>
      <li>props</li>
      <li>slot</li>
    </ul>
    <hr>
    <ul>
      <li>computed 动态计算值<computed-demo></computed-demo></li>
      <li>filter 过滤器<filter-demo></filter-demo></li>
      <li>props 父级传值给子组建<props-demo></props-demo></li>
      <li>slot 传html给子组建 <slot-demo></slot-demo></li>
    </ul>
  </div>
</template>

<script>
  import computedDemo from './computed/computedDemo'
  import filterDemo from './filter/filterDemo'
  import propsDemo from './prop/propDemo'
  import slotDemo from './slot/slotDemo'
export default {
  name: 'vuebase',
  data(){
      return {
          tips0:`<span>span</span>`,
          tips1 : `模板取值一般用{{ 这是是数据 }},个数值是被解析成单纯的文本,所以有些事有要用到html的时候就没办法显示出来,这个时候就要用到非安全的模板语法v-html`,
          tips2:`http://www.baidu.com`,
          tips3:`<a :href="url_baidu" target="_blank">链接到百度</a>`,
          tips4:`<span v-html="\`<div>modal</div>\`"></span>`,
      }
  },
  components:{
    computedDemo,
    filterDemo,
    propsDemo,
    slotDemo,
  }
}
</script>

<style>
</style>
