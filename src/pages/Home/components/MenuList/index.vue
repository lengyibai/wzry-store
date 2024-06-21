<script setup lang="ts">
const menu_list = [
  {
    label: "热门",
    icon: "/static/images/hot.png",
  },
  {
    label: "精品",
    icon: "/static/images/great.png",
  },
  {
    label: "待办",
    icon: "/static/images/todo.png",
  },
  {
    label: "公司",
    icon: "/static/images/firm.png",
  },
  {
    label: "公告",
    icon: "/static/images/notice.png",
  },
];
</script>

<template>
  <view class="menu-list">
    <view v-for="(item, index) in menu_list" :key="index" class="menu-item">
      <img class="icon" :src="item.icon" alt="" />
      <text class="label">
        {{ item.label }}
      </text>
    </view>
  </view>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
