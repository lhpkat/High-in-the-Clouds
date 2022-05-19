<template>
  <!-- <div class="common-layout"> -->

    <el-container>
      
      <!-- <el-scrollbar class="main-aside" max-height="500px"> -->
        <el-aside width="200px" class="main-aside">
          <!-- <el-button :icon="HomeFilled" class="home-button"/> -->
          <Aside />
        </el-aside>
      <!-- </el-scrollbar> -->

      <el-container>

        <el-header class="main-header">
          <Header />
        </el-header>

        <el-main class="main-main">
          <div :class="['main-main-box', 'animate__fadeInRight']">
            <router-view />
          </div>
        </el-main>

      </el-container>
    </el-container>

  <!-- </div> -->
</template>

<script setup lang="ts">
import {
  HomeFilled
} from '@element-plus/icons-vue'

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
  width: 100%;
  height: 100%;
  margin: 50px 0 10px 20px;
  border-radius: 30px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
  position: sticky;
  top: 60px;
}

.main-header {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-around; */
    font-weight: 700;
    letter-spacing: 3px;
    /* word-spacing: -1px; */
    line-height: 70px;
    text-align: right;
    margin-right: 120px;
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
      transition: height 2s ease-in-out;
    }
}

.main-box-enter-active {
  transition: all 0.3s ease-out;
}

.main-box-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.main-box-enter-from,
.main-box-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.el-container {
  .el-sub-menu {
    list-style: none;
    margin: 0;
    padding-left: 0;
    width: 100%;
  }

  .el-menu-item-group__title{
    text-align: initial;
    font-size: 20px;
    color: rgb(90, 58, 58);
    font-weight: 900;
    padding-left: 40px;
  }

  .home-button {
    height: 30px;
    width: 30px;
    padding: 0;
    border-radius: 5px;
  }
}


</style>
