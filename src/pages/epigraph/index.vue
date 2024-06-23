<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

// #ifdef H5
onLoad(() => {
  uni.hideTabBar();
});
// #endif
</script>

<template>
  <view class="epigraph">
    <div
      class="content"
      :style="{
        height: `calc(100vh - var(--config-tab-bar-height))`,
      }"
    >
      铭文
    </div>

    <lib-tab-bar current-path="epigraph" />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
