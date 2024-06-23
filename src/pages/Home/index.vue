<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

import Search from "./components/Search/index.vue";
import MenuList from "./components/MenuList/index.vue";
import HotCamp from "./components/HotCamp/index.vue";
import HotSkinType from "./components/HotSkinType/index.vue";

import { useDevice } from "@/hooks";

const imgs = [
  "https://lengyibai.github.io/wzry-material/heros/duoliya_hb_2_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/xiangyu_hb_8_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/mingshiyin_hb_5_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/guanyu_hb_6_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/jing_hb_6_s.jpg",
];

const { app_nav_height } = useDevice();

// #ifdef H5
onLoad(() => {
  uni.hideTabBar();
});
// #endif
</script>

<template>
  <view class="home">
    <view
      class="content"
      :style="{
        paddingTop: app_nav_height + 'px',
        height: `calc(100vh - var(--config-tab-bar-height))`,
      }"
    >
      <view class="background">
        <view class="top"></view>
        <view class="bottom"></view>
      </view>

      <Search />

      <view class="tip">
        <text class="name">Hi，冷弋白</text>
        <text class="desc">前端工程师</text>
      </view>

      <lib-swiper height="300rpx" :img-list="imgs" />

      <MenuList />

      <HotCamp />

      <HotSkinType />
    </view>

    <lib-tab-bar current-path="home" />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
