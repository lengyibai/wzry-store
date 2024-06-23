import { ref } from "vue";

/** @description 获取设备信息 */
const useDevice = () => {
  const ExposeData = {
    /** 手机状态栏高度 */
    status_bar_height: ref(0),
    /** 小程序状态栏高度 */
    app_nav_height: ref(0),
  };
  const { status_bar_height, app_nav_height } = ExposeData;

  uni.getSystemInfo({
    success: (res) => {
      //获取胶囊按钮的布局位置信息
      const { top, height } = uni.getMenuButtonBoundingClientRect();
      //获取手机顶部状态栏的高度
      status_bar_height.value = res.statusBarHeight || 0;

      // 计算胶囊栏高度胶囊高度 + （胶囊顶部坐标 - 手机状态栏高度） * 2
      const nav_bar_height = height + (top - status_bar_height.value) * 2;
      // 计算顶部图标距离
      app_nav_height.value = status_bar_height.value + nav_bar_height;
    },
    fail: (err) => {
      console.error("获取系统信息失败:", err);
    },
  });

  return {
    ...ExposeData,
  };
};

export { useDevice };
