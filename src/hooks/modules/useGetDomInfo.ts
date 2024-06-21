import { getCurrentInstance, onMounted } from "vue";

/** @description 获取dom信息
 * @param id 元素ID名称
 * @param callback 回调函数
 */
const useGetDomInfo = (id: string, callback: (v: UniApp.NodeInfo | UniApp.NodeInfo[]) => void) => {
  onMounted(() => {
    const instance = getCurrentInstance();
    const query = uni.createSelectorQuery().in(instance);
    query
      .select(`#${id}`)
      .boundingClientRect((data) => {
        callback(data);
      })
      .exec();
  });
};

export { useGetDomInfo };
