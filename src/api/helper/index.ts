import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { UniAdapter } from "uniapp-axios-adapter";

import type { ResultData } from "@/api/interface";
import { dayjs } from "@/utils/tool";

const local = {
  adapter: UniAdapter,
  baseURL: import.meta.env.VITE_DATABASE_URL,
  timeout: 1000 * 600,
} as const;

/* 本地JSON请求 */
class LocaleHttp {
  private service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /* 请求拦截器 */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.url += `?temp=${dayjs().valueOf()}`;
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    /* 响应拦截器 */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  Get<T = unknown>(
    url: string,
    params?: object,
    config?: AxiosRequestConfig,
  ): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config });
  }
}

const $LocaleHttp = new LocaleHttp(local);

export { $LocaleHttp };
