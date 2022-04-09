<template>
  vue打包后dist的使用 
  发现问题
  vue项目完成打包出dist后准备打开index.html，发现居然页面是一片空白，f12一片报红。

  分析问题
  经过多次网上查询后发现这是由于vue打包时，脚手架会帮你配置好大量参数，但其中路径publicPath被配置为了"/",需要手动修改。

  解决办法
  1、将vue.config.js中的publicPath:"/"修改为publicPath:"./"
  image
  2、删除之前的dist重新打包。

  结语
  再次打包后打开dist中的index.html，发现页面出来了，但是如果页面有路由跳转的话，会发现跳转失败，
  这时需要修改router中的路由模式为hash:
  在router的index.js中修改：从vue-router中引入createWebHashHistory，将createWebHistory(process.env.BASE_URL)改为createWebHashHistory(process.env.BASE_URL)。
  image
  最后重新打包即可。
</template>

<script setup lang="ts">

</script>

<style>

</style>