<script setup lang="ts">
import NoticeItem from "./components/NoticeItem/index.vue";

import { useSwiper } from "@/hooks";

interface Props {
  /** 公告列表 */
  notices: any[];
  /** 轮播图高度 */
  height?: string;
  /** 轮播间隔（ms） */
  duration?: number;
}
const $props = withDefaults(defineProps<Props>(), {
  duration: 3000,
  height: "100%",
});

const { xy, is_dragging, current_index, start, move, end, is_init } = useSwiper({
  id: "swiper",
  count: $props.notices.length,
  direction: "vertical",
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
        transform: `translateY(${xy}px)`,
      }"
    >
      <view class="side-item">
        <NoticeItem :notice="notices[notices.length - 1]" />
      </view>
      <view v-for="(item, index) in notices" :key="index" class="side-item">
        <NoticeItem :notice="item" />
      </view>
      <view class="side-item">
        <NoticeItem :notice="notices[0]" />
      </view>
    </view>

    <view class="dot-list">
      <view
        v-for="(item, index) in notices.length"
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
