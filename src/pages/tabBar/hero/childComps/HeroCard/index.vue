<template>
  <view class="HeroCard cursor-pointer" @click="view">
    <view class="id">No.{{ hero.id }}</view>
    <image class="bg" :src="hero.cover" mode="aspectFill" />
    <view class="bottom">
      <view class="name">{{ hero.name }}</view>
      <view class="mark">{{ hero.mark }}</view>
    </view>
    <view class="mask"></view>
  </view>
</template>
<script setup lang="ts">
import { heroDefault } from "@/defaultValue/defaults";
interface Props {
  hero: Hero.Data;
}
withDefaults(defineProps<Props>(), {
  hero: () => {
    return heroDefault;
  },
});

interface Emits {
  (e: "view"): void;
}
const emit = defineEmits<Emits>();

const view = () => {
  emit("view");
};
</script>
<style scoped lang="less">
@import "./index.less";
</style>
