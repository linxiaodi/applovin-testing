import React, { FC } from 'react';
import { useWeatherBase } from '../hooks/useWeatherBase';
import walterIcon from '../asserts/walter-active.svg';
import humidityIcon from '../asserts/humidity-active.svg';
import windIcon from '../asserts/wind-active.svg';
import { useWeatherForecastHourly } from '../hooks/useWeatherForecastHourly';
import { useWeatherForecastDaily } from '../hooks/useWeatherForecastDaily';
import { useWeatherImageMap } from '../hooks/useWeatherImageMap';
import routerBack from '../asserts/router-back.svg';
import { useNavigate } from 'react-router';
import { useWeatherChart } from '../hooks/useWeatherChart';
import { DAY_MAP } from '../hooks/useCurrentDay';
import { WEATHER_CODE_TO_DAY_IMAGE } from '../constant';

export const Detail: FC = () => {
  const { data: base, loading: baseLoading } = useWeatherBase();

  const { data: hourlyData } = useWeatherForecastHourly();
  const { data: dailyData } = useWeatherForecastDaily();

  const chart = useWeatherChart(hourlyData?.hourly.slice(0, 6).map((item) => {
    return {
      temperature: +item.temperature,
      time: new Date(item.time).getHours().toString()
    };
  }));

  const navigate = useNavigate();
  const imgMap = useWeatherImageMap();

  if (baseLoading) {
    return <div>loading</div>;
  }

  return <div className="detail">
    <img onClick={() => {
      navigate('/home', { replace: true });
    }} src={routerBack} className="detail-router-back" alt=""/>
    <img className="detail-weather" src={imgMap[base!.now.code]} alt=""/>
    <div className="detail-title">{base?.location.name}</div>
    <div className="detail-temperature">
      <span>{base?.now.temperature}</span> <span>°C</span>
    </div>
    <div className="detail-humidity">
      {
        [
          {
            title: '降水量',
            icon: walterIcon,
            text: base!.now.clouds,
            unit: '%',
            color: '#658ED9',
            background: 'rgba(101, 142, 217, 0.1)'
          },
          {
            title: '湿度',
            icon: humidityIcon,
            text: base!.now.humidity,
            unit: '%',
            color: '#D86191',
            background: 'rgba(216, 97, 145, 0.1)'
          },
          {
            title: '风速',
            icon: windIcon,
            text: base!.now.wind_speed,
            unit: 'km/h',
            color: '#5E4FC1',
            background: 'rgba(94, 79, 193, 0.1)'
          }
        ].map(({ title, icon, text, unit, color, background }) => {
          return <div key={title} className="humidity-item" style={{ color, background }}>
            <div>
              <img src={icon} alt=""/>
            </div>
            <span>{text}{unit}</span>
          </div>;
        })
      }
    </div>
    <div className="chart-box">
      <div className="chart-box-title">Today</div>
      {chart}
    </div>

    <div className="forecast-daily">
      {
        dailyData?.daily.slice(0, 7).map(({ date, code_day, high, low }) => {
          return <div className="forecast-daily-item">
            <div className="title">{DAY_MAP[new Date(date).getDay()]}</div>
            <div>
              <img src={WEATHER_CODE_TO_DAY_IMAGE[code_day]} alt=""/>
            </div>
            <div className="temperature">
              <span>{high}<span className="unit">°C</span></span>
              <span>{low}<span className="unit">°C</span></span>
            </div>
          </div>
        })
      }
    </div>
  </div>;
};
