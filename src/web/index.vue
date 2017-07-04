<template>
  <div>
    <div class="widewrapper masthead">
      <div class="container">
        <div id="mobile-nav-toggle" class="pull-right">
          <router-link to="/">
            <i class="fa fa-bars"></i>
          </router-link>
        </div>

        <nav class="pull-right clean-nav">
          <div class="collapse navbar-collapse">
            <ul class="nav nav-pills navbar-nav">

              <li>
                <router-link to="index.html">Home</router-link>
              </li>
              <li>
                <router-link to="about.html">About</router-link>
              </li>
              <li>
                <router-link to="contact.html">Contact</router-link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </div>

    <div class="widewrapper subheader">
      <div class="container">
        <div class="clean-breadcrumb">
          <router-link to="#">Blog</router-link>
        </div>

        <div class="clean-searchbox">
          <form action="#" method="get" accept-charset="utf-8">
            <input class="searchfield" id="searchbox" type="text" placeholder="Search">
            <button class="searchbutton" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="widewrapper main">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <article class=" blog-teaser">
                  <header>
                    <img src="../../static/img/vuejs.png" alt="vue">
                    <h3><router-link to="/vuebase">vue.js 2.x学习</router-link></h3>
                    <span class="meta">2017年7月2日</span>
                    <hr>
                  </header>java8lambda.png
                  <div class="body">
                    Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。
                  </div>
                  <div class="clearfix">
                    <router-link to="/vuebase" class="btn btn-clean-one">Read more</router-link>
                  </div>
                </article>
              </div>


              <div class="col-md-6 col-sm-6">
                <article class="blog-teaser">
                  <header>
                    <img src="../../static/img/lambda.png">
                    <h3><router-link to="/lambda">java8 lambda表达式学习</router-link></h3>
                    <span class="meta">2017-07-03</span>
                    <hr>
                  </header>
                  <div class="body">
                    函数式编程兴起,各种语言都有自己的实现,如果还不学习函数式编程就要被淘汰了
                  </div>
                  <div class="clearfix">
                    <router-link to="/lambda" class="btn btn-clean-one">Read more</router-link>
                  </div>
                </article>
              </div>
            </div>

            <div class="copyrights">Collect from <router-link to="http://www.cssmoban.com/">手机网站模板</router-link></div>
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <article class="blog-teaser">
                  <header>
                    <img src="../../static/img/3.jpg" alt="">
                    <h3><router-link to="/webSingle">Blackor - Responsive HTML5 Theme</router-link></h3>
                    <span class="meta">19 August 2015, John Doe</span>
                    <hr>
                  </header>
                  <div class="body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sit. Doloribus dolores neque eos. Velit eveniet, necessitatibus aut sit tenetur perferendis! Commodi pariatur dignissimos, quis sequi odit iusto cumque quod!
                  </div>
                  <div class="clearfix">
                    <router-link to="/webSingle" class="btn btn-clean-one">Read more</router-link>
                  </div>
                </article>
              </div>
              <div class="col-md-6 col-sm-6">
                <article class="blog-teaser">
                  <header>
                    <img src="../../static/img/4.jpg" alt="">
                    <h3><router-link to="/webSingle">Yellow - HTML5 Template</router-link></h3>
                    <span class="meta">19 August 2015, John Doe</span>
                    <hr>
                  </header>
                  <div class="body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sit. Doloribus dolores neque eos. Velit eveniet, necessitatibus aut sit tenetur perferendis! Commodi pariatur dignissimos, quis sequi odit iusto cumque quod!
                  </div>
                  <div class="clearfix">
                    <router-link to="/webSingle" class="btn btn-clean-one">Read more</router-link>
                  </div>
                </article>
              </div>
            </div>

            <div class="paging">
              <router-link to="#" class="older">Older Post</router-link>
            </div>
          </div>
          <aside class="col-md-4 blog-aside">

            <div class="aside-widget">
              <header>
                <h3>Featured Post</h3>
              </header>
              <div class="body">
                <ul class="clean-list">
                  <li><router-link to="">Clean - Responsive HTML5 Template</router-link></li>
                  <li><router-link to="">Responsive Pricing Table</router-link></li>
                  <li><router-link to="">Yellow HTML5 Template</router-link></li>
                  <li><router-link to="">Blackor Responsive Theme</router-link></li>
                  <li><router-link to="">Portfolio Bootstrap Template</router-link></li>
                  <li><router-link to="">Clean Slider Template</router-link></li>
                </ul>
              </div>
            </div>

            <div class="aside-widget">
              <header>
                <h3>Related Post</h3>
              </header>
              <div class="body">
                <ul class="clean-list">
                  <li><router-link to="">Blackor Responsive Theme</router-link></li>
                  <li><router-link to="">Portfolio Bootstrap Template</router-link></li>
                  <li><router-link to="">Clean Slider Template</router-link></li>
                  <li><router-link to="">Clean - Responsive HTML5 Template</router-link></li>
                  <li><router-link to="">Responsive Pricing Table</router-link></li>
                  <li><router-link to="">Yellow HTML5 Template</router-link></li>
                </ul>
              </div>
            </div>

            <div class="aside-widget">
              <header>
                <h3>Tags</h3>
              </header>
              <div class="body clearfix">
                <ul class="tags">
                  <li><router-link to="#">HTML5</router-link></li>
                  <li><router-link to="#">CSS3</router-link></li>
                  <li><router-link to="#">COMPONENTS</router-link></li>
                  <li><router-link to="#">TEMPLATE</router-link></li>
                  <li><router-link to="#">PLUGIN</router-link></li>
                  <li><router-link to="#">BOOTSTRAP</router-link></li>
                  <li><router-link to="#">TUTORIAL</router-link></li>
                  <li><router-link to="#">UI/UX</router-link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <footer>
      <div class="widewrapper footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-widget">
              <h3><i class="fa fa-user"></i>About</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi laboriosam nostrum consequatur fugiat at, labore praesentium modi, quasi dolorum debitis reiciendis facilis, dolor saepe sint nemo, earum molestias quas.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error aspernatur assumenda quae eveniet.</p>
            </div>

            <div class="col-md-4 footer-widget">
              <h3><i class="fa fa-pencil"></i> Recent Post</h3>
              <ul class="clean-list">
                <li><router-link to="">Clean - Responsive HTML5 Template</router-link></li>
                <li><router-link to="">Responsive Pricing Table</router-link></li>
                <li><router-link to="">Yellow HTML5 Template</router-link></li>
                <li><router-link to="">Blackor Responsive Theme</router-link></li>
                <li><router-link to="">Portfolio Bootstrap Template</router-link></li>
                <li><router-link to="">Clean Slider Template</router-link></li>
              </ul>
            </div>

            <div class="col-md-4 footer-widget">
              <h3><i class="fa fa-envelope"></i>Contact Me</h3>

              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fugiat, cupiditate veritatis excepturi tempore explicabo.</p>
              <div class="footer-widget-icon">
                <i class="fa fa-facebook"></i><i class="fa fa-twitter"></i><i class="fa fa-google"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="widewrapper copyright">
        Copyright 2015 More Templates <router-link to="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</router-link>
        - Collect from <router-link to="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</router-link>
      </div>
    </footer>
  </div>

</template>

<script>
  export default {
    name: 'index'
  }
</script>
<style  scoped>

</style>

