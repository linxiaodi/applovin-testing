import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

export const useWeatherChart = (dataSource: { temperature: number, time: string }[] | undefined) => {
  const container = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<any>(null)

  useEffect(() => {
    if (dataSource) {
      if (!chartInstance.current) {
        const chart = new Chart({
          container: container.current!,
          autoFit: true,
          height: 100,
        })
        chart.data(dataSource)
        chart.tooltip(false);
        chart.scale({
          temperature: {
            min: 0,
            nice: true,
          },
          time: {
            range: [0, 1],
            nice: true,
          }
        })
        chart.area().position('time*temperature');
        chart.line().position('time*temperature');
        chart.axis('temperature', false)

        chart.render();
        chartInstance.current = chart
      } else {
        chartInstance.current.changeData(dataSource)
      }
    }
  }, [dataSource])

  return <div ref={container} className="weather-chart"/>;
};

