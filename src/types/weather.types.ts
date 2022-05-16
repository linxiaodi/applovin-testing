import { WEATHER_CODE_TO_DAY_IMAGE } from '../constant';

export interface IWeatherBaseItem {
  location: {
    name: string,
    timezone_offset: string
  },
  now: {
    text: string
    code: keyof typeof WEATHER_CODE_TO_DAY_IMAGE
    temperature: string
    humidity: string // 湿度
    wind_speed: string // 风速 km / h
    clouds: string // 云量
    wind_direction: string
  }
}

export interface IWeatherForecastHourly {
  hourly: {
    time: string,
    text: string,
    temperature: string
  }[]
}

export interface IWeatherForecastDaily {
  daily: {
    date: string,
    text_day: string,
    text_night: string,
    high: string
    low: string,
    code_day:  keyof typeof WEATHER_CODE_TO_DAY_IMAGE
  }[]
}
