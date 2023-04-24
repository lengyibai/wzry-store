<template>
  <view class="hero-info">
    <view
      class="top"
      :style="{
        backgroundImage: 'url(' + heroInfo!.suitable + ')',
      }"
    >
      <view class="mask">
        <view class="mark">
          <i></i>
          <text class="text">{{ heroInfo!.mark }}</text>
          <i></i>
        </view>
      </view>
      <view class="name">{{ heroInfo!.name }}</view>
    </view>
    <div class="down">
      <image class="arrow" src="/static/pages/heroInfo/down.png" mode="widthFix"></image>
    </div>
    <view class="info">
      <view class="title">
        <text class="a">英雄资料</text>
        <text class="b">INFOMATION</text>
      </view>
      <div class="box"></div>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { computed } from "vue";
import heroStore from "@/stores/hero";

const $heroStore = heroStore();
const heroInfo = computed(() => {
  console.log(heroInfo.value);

  return $heroStore.hero_info;
});

onLoad((data) => {
  $heroStore.setHeroInfo(Number(data.id));
});
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
