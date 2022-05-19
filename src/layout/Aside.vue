<template>
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu>
      <template #title class="menu-header">
        <!-- <el-icon>
          <watermelon />
        </el-icon> -->
        <router-link to="/" class="menu-home-button" @click="homeButtonClick">
            <el-icon><HomeFilled /></el-icon>
        </router-link>
        <span class="menu-columns"> 菜单栏 </span>
      </template>

      <el-menu-item-group
        v-for="item in routesPage"
        :key="item.name"
        :title="item.title"
        v-show="item.children"
      >
        <el-menu-item
          v-for="ele in item.children"
          :key="ele.name"
          v-show="ele.path"
        >
          <router-link :to="`${item.path}/${ele.path}`" class="menu-item-title">
            {{ ele.title }}
          </router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { routesPage } from "@/router";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const homeButtonClick = (e: any) => {
    e.stopPropagation()
}

</script>

<style lang="scss">

.el-menu-vertical-demo {
    border: 0;
}
.menu-columns {
  margin-left: 25px;
}

.menu-item-title {
  color: var(--el-menu-text-color);
  text-decoration: none;
  width: 100%;
  text-align: left;
  font-weight: 500;
  color: #597f96;
}

.home-button {
    text-align: initial;
    font-size: 20px;
    color: rgb(90, 58, 58);
    font-weight: 900;
}

// .el-menu {
    .el-sub-menu__title {
        display: flex;
        align-items: center;
        height: 56px;
        line-height: 56px;
        font-size: var(--el-menu-item-font-size);
        color: var(--el-menu-text-color);
        padding: 0 !important;
        list-style: none;
        cursor: pointer;
        position: relative;
        transition: border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);
        box-sizing: border-box;
        white-space: nowrap;

        &:hover {
            background-color: white;
        }
        .menu-home-button {
            width: 50px;
            color: #597f96;
            
            &:hover {
                background-color:  var(--el-menu-hover-bg-color);
            }
            i {
                margin: 0;
                vertical-align: middle;
                margin-top: -3px;
            }
        }
    }
    .menu-home-button {
        color: #597f96;
    }
// }
</style>
