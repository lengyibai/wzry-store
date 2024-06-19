<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

import { getHeroData } from "./api/modules/remote";

onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");

  getHeroData().then((res) => {
    console.log(res);
  });
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style>
html,
body,
#app {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
