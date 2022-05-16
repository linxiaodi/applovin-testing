import { useRequest } from './useRequest';
import { PRIVATE_KEY, request } from '../request';
import { IWeatherBaseItem, IWeatherForecastDaily } from '../types/weather.types';

export const useWeatherForecastDaily = () => {
  return useRequest<IWeatherForecastDaily>(() => {
    return request.request<null, [IWeatherForecastDaily]>({
      url: 'https://api.seniverse.com/v3/weather/daily.json',
      params: {
        key: PRIVATE_KEY,
        location: 'hangzhou',
        language: 'zh-Hans',
        unit: 'c'
      },
      method: 'get'
    }).then((res) => {
      return res[0]
    })
  }, {
    cacheKey: 'daily'
  })
};
