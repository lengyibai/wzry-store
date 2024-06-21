<script setup lang="ts">
import LibNotice from "./components/LibNotice/index.vue";

const notice = [
  {
    title: "公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1",
    time: "2024-06-22 00:00:00",
  },
  {
    title: "公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1",
    time: "2024-06-22 00:00:00",
  },
  {
    title: "公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1",
    time: "2024-06-22 00:00:00",
  },
  {
    title: "公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1",
    time: "2024-06-22 00:00:00",
  },
];
</script>

<template>
  <view class="notice">
    <view class="label">
      <text class="a">公告</text>
      <text class="b">事项</text>
    </view>
    <view class="line"></view>

    <div class="notice-swiper">
      <LibNotice :notices="notice" />
    </div>
  </view>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
