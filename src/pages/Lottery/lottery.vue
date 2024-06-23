<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

// #ifdef H5
onLoad(() => {
  uni.hideTabBar();
});
// #endif
</script>

<template>
  <view class="lottery">
    <view
      class="content"
      :style="{
        height: `calc(100vh - var(--config-tab-bar-height))`,
      }"
    >
      夺宝
    </view>

    <lib-tab-bar current-path="lottery" />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
