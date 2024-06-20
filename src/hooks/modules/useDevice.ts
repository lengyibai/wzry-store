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
      // 获取手机顶部状态栏的高度
      status_bar_height.value = res.statusBarHeight || 0;
      // 获取导航栏的高度（手机状态栏高度 + 胶囊高度 + 胶囊的上下间距）
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      const navBarHeight =
        menuButtonInfo.height + (menuButtonInfo.top - status_bar_height.value) * 2;
      // 计算顶部图标距离
      const topIconDistance = status_bar_height.value + navBarHeight;
      // 打印顶部图标距离
      app_nav_height.value = topIconDistance;
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
