<template>
  <view class="hero">
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      circular
      indicator-dots
      autoplay
      :interval="3000"
      :duration="500"
      indicator-color="rgba(255,255,255,0.25)"
      indicator-active-color="#fff"
    >
      <swiper-item>
        <img class="img" src="/static/pages/tabBar/hero/1.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img class="img" src="/static/pages/tabBar/hero/2.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img class="img" src="/static/pages/tabBar/hero/3.jpg" alt="" />
      </swiper-item>
    </swiper>

    <!-- tab栏 -->
    <v-tabs
      class="tabs"
      height="100rpx"
      v-model="current"
      :scroll="false"
      :tabs="tabs"
      @change="changeTab"
      bgColor="#1a1a1a"
      color="#fff"
      activeColor="#1193d8"
      fontSize="35rpx"
      lineHeight="5rpx"
    >
    </v-tabs>

    <!-- 英雄列表 -->
    <view class="hero-list">
      <view
        class="hero-card"
        v-for="(item, index) in heroList"
        :style="{
          transitionDelay: 0.025 * index + 's',
          height: card_height + 'rpx',
        }"
        :key="item.id"
      >
        <HeroCard :hero="item" @view="viewClick(item.id)" />
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import heroStore from "@/stores/hero";
import HeroCard from "./childComps/HeroCard/index.vue";

const $heroStore = heroStore();

const tabs = ["全部", "坦克", "战士", "法师", "刺客", "辅助"];
const current = ref(0);
const card_height = ref(0);

$heroStore.getHeroData();
const heroList = computed(() => {
  return $heroStore.filter_list;
});

onMounted(() => {
  uni
    .createSelectorQuery()
    .select(".hero-list")
    .boundingClientRect((res: any) => {
      card_height.value = res.width * 1.25;
    })
    .exec();
});

const changeTab = (index: number) => {
  $heroStore.setProfessional(tabs[index]);
  setTimeout(() => {
    uni.pageScrollTo({
      scrollTop: 225,
      duration: 0,
    });
  }, 50);
};
const viewClick = (id: number) => {
  uni.navigateTo({
    url: "/pages/hero/heroInfo/heroInfo?id=" + id,
  });
};
</script>
<style lang="less" scoped>
.hero {
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  font-family: "华文楷体";

  .swiper {
    height: 400rpx;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .tabs {
    position: sticky;
    top: 0;
    z-index: 9;
    margin: 15rpx 0;
  }

  .hero-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20rpx 35rpx;

    .hero-card {
      position: relative;
      width: calc(50% - 15rpx);
      margin-bottom: 30rpx;
    }
  }
}
</style>
