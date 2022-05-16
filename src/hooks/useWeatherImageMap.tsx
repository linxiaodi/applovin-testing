import React, { useMemo } from 'react';
import { WEATHER_CODE_TO_DAY_IMAGE, WEATHER_CODE_TO_NIGHT_IMAGE } from '../constant';

export const useWeatherImageMap = (): typeof WEATHER_CODE_TO_DAY_IMAGE => {
  return useMemo<typeof WEATHER_CODE_TO_DAY_IMAGE>(() => {
    const d = new Date();
    if (d.getHours() > 6 && d.getHours() < 18) {
      return WEATHER_CODE_TO_DAY_IMAGE
    }
    return WEATHER_CODE_TO_NIGHT_IMAGE
  } ,[])
}
