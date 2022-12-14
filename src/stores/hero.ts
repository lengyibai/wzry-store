import { defineStore } from "pinia";
import { HeroStore } from "./interface/index";
import { getAllData } from "@/api/main/hero";

const hero = defineStore("hero", {
  state: (): HeroStore.State => ({
    hero_list: [],
    profession: "", //职业类型
    filter_list: [], //筛选后的列表
    hero_info: {}, //英雄信息
  }),
  actions: {
    /** @description: 获取所有数据 */
    getHeroData() {
      getAllData().then((res) => {
        this.setHeroList(res.data.hero);
      });
    },
    /* 设置英雄列表 */
    setHeroList(data: Hero.Data[]) {
      this.hero_list = data;
      this.setProfessional("全部");
    },

    /* 设置职业 */
    setProfessional(profession = "") {
      this.profession = profession;
      if (profession === "全部") {
        this.filter_list = this.hero_list;
      } else {
        this.filter_list = this.hero_list.filter((item) => {
          return item.profession.includes(profession);
        });
      }
    },

    /* 设置英雄数据 */
    setHeroInfo(id: number) {
      this.hero_info = this.filter_list.find((item) => {
        return item.id === id;
      });
    },
  },
});

export default hero;
