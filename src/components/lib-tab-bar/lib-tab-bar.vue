<script setup lang="ts">
interface Props {
  /** 当前页面名称 */
  currentPath: "home" | "equip" | "epigraph" | "lottery" | "my";
}
defineProps<Props>();

const handleTo = (path: string) => {
  uni.switchTab({
    url: path,
  });
};
</script>

<template>
  <div class="lib-tab-bar">
    <!-- 首页 -->
    <div
      class="tab-item"
      :class="{
        active: currentPath === 'home',
      }"
      @click="handleTo('/pages/home/index')"
    >
      <i class="iconfont icon-shouye"></i>
      <text class="label">首页</text>
    </div>

    <!-- 装备 -->
    <div
      class="tab-item"
      :class="{
        active: currentPath === 'equip',
      }"
      @click="handleTo('/pages/equip/index')"
    >
      <i class="iconfont icon-zhuangbeizhizao"></i>
      <text class="label">装备</text>
    </div>

    <!-- 夺宝 -->
    <div class="lottery" @click="handleTo('/pages/lottery/lottery')"></div>

    <!-- 铭文 -->
    <div
      class="tab-item"
      :class="{
        active: currentPath === 'epigraph',
      }"
      @click="handleTo('/pages/epigraph/index')"
    >
      <i class="iconfont icon-mingwen"></i>
      <text class="label">铭文</text>
    </div>

    <!-- 我的 -->
    <div
      class="tab-item"
      :class="{
        active: currentPath === 'my',
      }"
      @click="handleTo('/pages/my/index')"
    >
      <i class="iconfont icon-wode"></i>
      <text class="label">我的</text>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
