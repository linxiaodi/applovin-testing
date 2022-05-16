import React, { FC, useEffect, useMemo, useState } from 'react';
import { useWeatherBase } from '../hooks/useWeatherBase';
import { useCurrentDate } from '../hooks/useCurrentDay';
import walterIcon from '../asserts/walter.svg'
import windIcon from '../asserts/wind.svg'
import humidityIcon from '../asserts/humidity.svg'
import { useNavigate } from 'react-router';
import { useWeatherImageMap } from '../hooks/useWeatherImageMap';

export const Home: FC = () => {
  const { data, run, loading } = useWeatherBase();

  const imageMap = useWeatherImageMap()

  const { dayText, hours } = useCurrentDate();
  const navigate = useNavigate()


  if (loading) {
    return <div className='home'>loading...</div>
  }


  return <div className="home">
    <div className="home-card">
      <img className="home-card-img" src={imageMap[data!.now.code]} alt=""/>
      <h3 className="home-card-title">{data!.location.name}</h3>
      <div className="home-card-content">
        <div className="temperature">
          <div>
            <span className="temperature-num">{data?.now.temperature}</span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="temperature-date">
            <span>{dayText},</span>
            <span>{hours}</span>
          </div>
        </div>
        <div className="tags">
          <div className="tags-wind">{data?.now.wind_direction}</div>
          <div className="tags-text">{data?.now.text}</div>
        </div>
      </div>
      <div onClick={() => {
        navigate('/detail')
      }} className="home-card-button">详情</div>
    </div>
    <div className="humidity">
      {
        [
          { title: '降水量', icon: walterIcon, text: data!.now.clouds, unit: '%' },
          { title: '湿度', icon: humidityIcon, text: data!.now.humidity, unit: '%' },
          { title: '风速', icon: windIcon, text: data!.now.wind_speed, unit: 'km/h' }
        ].map(({ title, icon, text, unit }) => {
          return <div key={title} className="humidity-item">
            <div>
              <img src={icon} alt=""/>
              <span>{title}</span>
            </div>
            <span>{text}{unit}</span>
          </div>
        })
      }
    </div>
  </div>
}
