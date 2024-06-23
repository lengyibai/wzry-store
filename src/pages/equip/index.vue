<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

// #ifdef H5
onLoad(() => {
  uni.hideTabBar();
});
// #endif
</script>

<template>
  <view class="equip">
    <div
      class="content"
      :style="{
        height: `calc(100vh - var(--config-tab-bar-height))`,
      }"
    >
      装备
    </div>

    <lib-tab-bar current-path="equip" />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
