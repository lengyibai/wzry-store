<script setup lang="ts">
import { useSwiper } from "../../hooks/modules/useSwiper";

interface Props {
  /** 图片列表 */
  imgList: string[];
  /** 轮播图高度 */
  height: string;
  /** 轮播间隔（ms） */
  duration?: number;
}
const $props = withDefaults(defineProps<Props>(), {
  duration: 3000,
});

const { xy, is_dragging, current_index, start, move, end, is_init } = useSwiper({
  id: "swiper",
  count: $props.imgList.length,
  direction: "horizontal",
  autoScrollInterval: $props.duration,
});
</script>

<template>
  <view
    id="swiper"
    class="lib-swiper"
    :style="{
      height: height,
    }"
    @touchstart="start"
    @touchmove="move"
    @touchend="end"
  >
    <view
      v-if="is_init"
      class="swiper-content"
      :style="{
        transition: `${is_dragging ? '0s' : '0.25s'}`,
        transform: `translateX(${xy}px)`,
      }"
    >
      <view class="side-item">
        <img class="img" :src="imgList[imgList.length - 1]" alt="" />
      </view>
      <view v-for="(item, index) in imgList" :key="index" class="side-item">
        <img class="img" :src="item" alt="" />
      </view>
      <view class="side-item">
        <img class="img" :src="imgList[0]" alt="" />
      </view>
    </view>

    <view class="dot-list">
      <view
        v-for="(item, index) in imgList.length"
        :key="index"
        class="dot-item"
        :class="{
          active: index === current_index,
        }"
      ></view>
    </view>
  </view>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
