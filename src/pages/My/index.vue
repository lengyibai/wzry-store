<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

// #ifdef H5
onLoad(() => {
  uni.hideTabBar();
});
// #endif
</script>

<template>
  <view class="my">
    <div
      class="content"
      :style="{
        height: `calc(100vh - var(--config-tab-bar-height))`,
      }"
    >
      我的
    </div>

    <lib-tab-bar current-path="my" />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
