import { ref, computed, onMounted, getCurrentInstance } from "vue";

interface SwipeConfig {
  /** 元素ID */
  id: string;
  /** 数量 */
  count: number;
  /** 方向 */
  direction?: "horizontal" | "vertical";
  /** 轮播间隔 */
  autoScrollInterval?: number;
}

export function useSwiper(config: SwipeConfig) {
  const { id, count, autoScrollInterval = 2000, direction = "horizontal" } = config;

  /** 记录开始位置的X坐标 */
  let startXY = 0;
  /** 当前X坐标 */
  let currentXY = 0;
  /** 记录开始时间 */
  let startTime = 0;
  /** 轮播图宽度 */
  let slider_width_height = 0;
  /** 初始化为第一张图的位置（前面加了最后一张图） */
  let left_top = 0;
  /** 自动滚动计时器 */
  let autoScrollTimer: NodeJS.Timeout;
  /** 初始化索引为1，即第二张图 */
  const index = ref(1);

  const ExposeData = {
    /** 坐标 */
    xy: ref(0),
    /** 是否初始化完毕 */
    is_init: ref(false),
    /** 是否正在拖动 */
    is_dragging: ref(false),
  };
  const { is_dragging, xy, is_init } = ExposeData;

  const ExposeComputed = {
    current_index: computed(() => {
      if (index.value === 0) return count - 1;
      if (index.value === count + 1) return 0;
      return index.value - 1;
    }),
  };

  /** @description 获取当前事件的pageX */
  const getPageXY = (event: TouchEvent | MouseEvent) => {
    if ("changedTouches" in event) {
      if (direction === "horizontal") return event.changedTouches[0].pageX;
      return event.changedTouches[0].pageY;
    } else {
      if (direction === "horizontal") return event.pageX;
      return event.pageY;
    }
  };

  const ExposeMethods = {
    /** @description 手指按下 */
    start(event: TouchEvent | MouseEvent) {
      clearInterval(autoScrollTimer);
      // 无缝循环处理：在边界时立即跳转到实际的第一张或最后一张图
      if (index.value === 0) {
        index.value = count;
        left_top = -slider_width_height * count;
        xy.value = left_top;
      } else if (index.value === count + 1) {
        index.value = 1;
        left_top = -slider_width_height;
        xy.value = left_top;
      }

      is_dragging.value = true;
      clearInterval(autoScrollTimer);
      startXY = currentXY = getPageXY(event);
      startTime = new Date().getTime();
    },

    /** @description 手指移动 */
    move(event: TouchEvent | MouseEvent) {
      if (!is_dragging.value) return;

      const moveX = getPageXY(event);
      left_top += moveX - currentXY;
      currentXY = moveX;
      xy.value = left_top;
    },

    /** @description 手指抬起 */
    end(event: TouchEvent | MouseEvent) {
      autoScroll();
      is_dragging.value = false;
      const endTime = new Date().getTime() - startTime;
      const endXY = getPageXY(event);
      const slide = startXY - endXY;
      const slideSpeed = Math.abs(slide) / endTime;

      // 根据滑动距离或速度判断是否翻页
      const slideThreshold = slider_width_height / 2; // 滑动距离阈值，通常为轮播图宽度的三分之一
      const speedThreshold = 0.275; // 滑动速度阈值，根据体验调整

      if (Math.abs(slide) > slideThreshold || slideSpeed > speedThreshold) {
        slide > 0 ? index.value++ : index.value--;
      }

      // 循环处理：限制索引在有效范围内
      if (index.value > count) {
        index.value = count + 1; // 移动到附加的第一张图
      } else if (index.value < 1) {
        index.value = 0; // 移动到附加的最后一张图
      }

      left_top = -slider_width_height * index.value;
      xy.value = left_top;
    },

    /** @description 滚动到上一张 */
    last() {
      if (index.value < 1) {
        is_dragging.value = true;
        index.value = count + 1;
        left_top = -slider_width_height * (count + 1);
        xy.value = left_top;

        setTimeout(() => {
          is_dragging.value = false;
          last();
        });
      } else {
        index.value--;
        left_top = -slider_width_height * index.value;
        xy.value = left_top;
      }
    },

    /** @description 滚动到下一张 */
    next() {
      if (index.value > count) {
        is_dragging.value = true;
        index.value = 1;
        left_top = -slider_width_height;
        xy.value = left_top;

        setTimeout(() => {
          is_dragging.value = false;
          next();
        }, 50);
      } else {
        index.value++;
        left_top = -slider_width_height * index.value;
        xy.value = left_top;
      }
    },
  };
  const { next, last } = ExposeMethods;

  const autoScroll = () => {
    autoScrollTimer = setInterval(next, autoScrollInterval);
  };

  onMounted(() => {
    const instance = getCurrentInstance();
    const query = uni.createSelectorQuery().in(instance);
    query
      .select(`#${id}`)
      .boundingClientRect((data) => {
        const { width, height } = data as UniApp.NodeInfo;
        if (direction === "horizontal") {
          xy.value = left_top = -width!;
          slider_width_height = width!;
        } else {
          xy.value = left_top = -height!;
          slider_width_height = height!;
        }
        autoScroll();
        is_init.value = true;
      })
      .exec();
  });

  return {
    ...ExposeData,
    ...ExposeComputed,
    ...ExposeMethods,
  };
}
