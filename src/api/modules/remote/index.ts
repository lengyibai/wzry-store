import { $LocaleHttp } from "@/api/helper";

/** @description 获取英雄信息列表 */
export const getHeroData = () => {
  return $LocaleHttp.Get(`/hero.json`);
};
