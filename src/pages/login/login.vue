<template>
  <view class="login">
    <view class="tip">Welcome</view>
    <tui-input placeholder="请输入账号" clearable label="账号" v-model="accountRef.account"></tui-input>
    <tui-input placeholder="请输入密码" clearable label="密码" password v-model="accountRef.pwd"></tui-input>
    <view class="login-btn">
      <tui-button @click="loginAction">登录</tui-button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";

const accountRef = ref({
  account: "冷弋白",
  pwd: "123456",
});

async function loginAction() {
  uni.switchTab({
    url: "/pages/tabBar/hero/hero",
  });
}
</script>
<style lang="less">
@import "./login.less";
</style>
