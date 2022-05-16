import daySun from '../asserts/day_sun.png'
import dayClouds from '../asserts/day_clouds.png'
import dayWind from '../asserts/day_wind.png'
import dayStorm from '../asserts/day_storm.png'
import dayRain from '../asserts/day_rain.png'
import nightSun from '../asserts/night_moon.png'
import nightClouds from '../asserts/night_clouds.png'
import nightWind from '../asserts/night_wind.png'
import nightStorm from '../asserts/night_storm.png'
import nightRain from '../asserts/night_rain.png'

export const WEATHER_CODE_TO_DAY_IMAGE = {
  0: daySun,
  1: daySun,
  4: dayClouds,
  5: dayClouds,
  6: dayClouds,
  7: dayClouds,
  8: dayClouds,
  9: dayWind,
  10: dayStorm,
  11: dayStorm,
  12: dayStorm,
  13: dayRain,
  14: dayRain,
  15: dayRain,
  16: dayRain,
  17: dayRain,
  18: dayRain,
  19: dayRain,
  32: dayWind,
  33: dayWind,
  34: dayWind,
  35: dayWind,
  36: dayWind,
}

export const WEATHER_CODE_TO_NIGHT_IMAGE = {
  0: nightSun,
  1: nightSun,
  4: nightClouds,
  5: nightClouds,
  6: nightClouds,
  7: nightClouds,
  8: nightClouds,
  9: nightWind,
  10: nightStorm,
  11: nightStorm,
  12: nightStorm,
  13: nightRain,
  14: nightRain,
  15: nightRain,
  16: nightRain,
  17: nightRain,
  18: nightRain,
  19: nightRain,
  32: nightWind,
  33: nightWind,
  34: nightWind,
  35: nightWind,
  36: nightWind,
}
