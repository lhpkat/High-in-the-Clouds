<template>
  <!-- <div class="common-layout"> -->

    <el-container>
      
      <!-- <el-scrollbar class="main-aside" max-height="500px"> -->
      <el-aside width="200px" class="main-aside">
        <Aside />
      </el-aside>
      <!-- </el-scrollbar> -->

      <el-container>

        <el-header class="main-header">
          <Header />
        </el-header>

        <el-main class="main-main">
          <div :class="['main-main-box', 'animate__fadeInRight']">
            <router-view>
            </router-view>
          </div>
        </el-main>

      </el-container>
    </el-container>

  <!-- </div> -->
</template>

<script setup lang="ts">
import 'element-plus/dist/index.css'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
// export {}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  // width: 100%;
  // height: 100%;
}

body {
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
  background: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.main-aside {
  /* border: 2px solid blue; */
  height: 100%;
  margin: 10px 0;
  border-radius: 30px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 900;
  letter-spacing: 4px;
  word-spacing: 20px;
}

.main-main {
    --el-main-maigin: 20px;
    margin: 0 var(--el-main-maigin);

    .main-main-box {
      padding: 50px 60px;
      border-radius: 40px;
      background: #e0e0e0;
      box-shadow: inset 24px 24px 48px #9f9f9f,
                  inset -24px -24px 48px #ffffff;
      line-height: 35px;
      /* word-spacing: 2px; */
      letter-spacing: 1px;
    }
}

.el-menu-item-group__title{
  text-align: initial;
  font-size: 20px;
  color: rgb(90, 58, 58);
  font-weight: 900;
  padding-left: 40px;
}

</style>
