<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <span>滚动下拉获取数据</span>
    <div id="myscroll" style="height: 400px;overflow-y: auto;">
      <pre>
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容这是一段内容这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      这是一段内容
      </pre>
      <div>{{showData}}</div>
    </div>

    <span>下拉获取数据</span>

  </div>
</template>

<script>
  export default {
    name: 'scrollFetchData',
    data() {
      return {
        jsonData: `教学`,
        showData: ""
      }
    },
    mounted() {
      document.querySelector("#myscroll").addEventListener('scroll', () => {
        console.log(this.getClientHeight(),this.getScrollTop(),this.getScrollHeight());

        if (this.getClientHeight() + this.getScrollTop() >= this.getScrollHeight()) {
          //这里就获取到json数据
          this.showData = this.getJson();
        }
      });
    },
    methods: {
      getJson() {
        return this.jsonData;
      },
      //取窗口可视范围的高度
      getClientHeight() {
        var clientHeight = document.querySelector("#myscroll").clientHeight;
        // if (document.body.clientHeight && document.documentElement.clientHeight) {
        //   clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        // } else {
        //   clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        // }
        return clientHeight;
      },
      //取窗口滚动条高度
      getScrollTop() {
        var scrollTop = document.querySelector("#myscroll").scrollTop;
        // if (document.documentElement && document.documentElement.scrollTop) {
        //   scrollTop = document.documentElement.scrollTop;
        // } else if (document.body) {
        //   scrollTop = document.body.scrollTop;
        // }
        return scrollTop;
      },
      //取文档内容实际高度
      getScrollHeight() {
        // return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        return document.querySelector("#myscroll").scrollHeight;
      },

    },

  }
</script>

<style>
</style>
