<script setup lang="ts">
interface Props {
  notice: any;
}
defineProps<Props>();
</script>

<template>
  <view class="notice">
    <text class="title">· {{ notice.title }}</text>
    <text class="time">{{ notice.time }}</text>
  </view>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
