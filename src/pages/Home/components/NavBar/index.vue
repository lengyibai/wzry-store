<script setup lang="ts">
import Search from "./components/Search/index.vue";

import { useDevice } from "@/hooks";

const { app_nav_height } = useDevice();
</script>

<template>
  <view
    class="nav-bar"
    :style="{
      paddingTop: app_nav_height + 'px',
    }"
  >
    <Search />
  </view>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
