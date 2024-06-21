<script setup lang="ts">
import Search from "./components/Search/index.vue";
import MenuList from "./components/MenuList/index.vue";
import Notice from "./components/Notice/index.vue";

import { useDevice } from "@/hooks";

const imgs = [
  "https://lengyibai.github.io/wzry-material/heros/duoliya_hb_2_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/xiangyu_hb_8_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/mingshiyin_hb_5_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/guanyu_hb_6_s.jpg",
  "https://lengyibai.github.io/wzry-material/heros/jing_hb_6_s.jpg",
];

const { app_nav_height } = useDevice();
</script>

<template>
  <view
    class="home"
    :style="{
      paddingTop: app_nav_height + 'px',
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
    <view class="line"></view>
    <Notice />
  </view>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
