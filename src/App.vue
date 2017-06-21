<template>
  <div id="app">
    <!-- Bootstrap styles -->
    <!--<link rel="stylesheet" href="css/bootstrap.min.css">-->


    <!-- Font-Awesome -->
    <!--<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">-->

    <!-- Google Webfonts -->
    <!--<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600|PT+Serif:400,400italic' rel='stylesheet'-->
          <!--type='text/css'>-->

    <!-- Styles -->
    <!--<link rel="stylesheet" href="css/style.css" id="theme-styles">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
