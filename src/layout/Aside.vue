<template>
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu>
      <template #title>
        <el-icon>
          <watermelon />
        </el-icon>
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
</script>

<style lang="scss" scoped>
.menu-columns {
  margin-left: 30px;
}

.menu-item-title {
  color: var(--el-menu-text-color);
  text-decoration: none;
  width: 100%;
  text-align: left;
  font-weight: 500;
  color: #597f96;
}
</style>
