import { request, PRIVATE_KEY } from "../request/index"
import { useRequest } from "./useRequest"
import { IWeatherBaseItem } from '../types/weather.types';

export const useWeatherBase = () => {
  return useRequest<IWeatherBaseItem>(() => {
    return request.request<null, [IWeatherBaseItem]>({
      url: 'https://api.seniverse.com/v3/weather/now.json',
      params: {
        key: PRIVATE_KEY,
        location: 'hangzhou',
        language: 'zh-Hans',
        unit: 'c'
      },
      method: 'get'
    }).then((data) => {
      return data[0];
    })
  }, {
    cacheKey: 'weather/now'
  })
}
