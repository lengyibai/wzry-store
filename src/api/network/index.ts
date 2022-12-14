import axios from "axios";
import { UniAdapter } from "uniapp-axios-adapter";

/* 域名管理 */
const server = axios.create({
  adapter: UniAdapter,
  baseURL: "https://lengyibai.gitee.io/weixin",
});

/* 配置默认请求 */
//GET请求
export function getReq(url: string, params = {}) {
  return server({
    method: "GET",
    url,
    params,
  });
}
