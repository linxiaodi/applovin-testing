import React from 'react';
import { useRequest } from './useRequest';
import { request, PRIVATE_KEY } from "../request/index"
import { IWeatherForecastHourly } from '../types/weather.types';

// 未来一天内每个小时的天气
export const useWeatherForecastHourly = () => {
  return useRequest<IWeatherForecastHourly>(() => {
    return request.request<null, [IWeatherForecastHourly]>({
      url: 'https://api.seniverse.com/v3/weather/hourly.json',
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
    cacheKey: 'hourly'
  })
};

