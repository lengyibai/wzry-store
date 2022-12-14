/** @description: 英雄 */
export namespace HeroStore {
  export interface State {
    profession: string;
    hero_list: Hero.Data[] | [];
    filter_list: Hero.Data[];
    hero_info: Partial<Hero.Data> | undefined;
  }
}
