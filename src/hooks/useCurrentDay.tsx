import React, { useMemo } from 'react';

export const DAY_MAP = ['周日', '周一', '周二','周三','周四','周五', '周六']

export const useCurrentDate = () => {
  return useMemo(() => {
    const d = new Date();
    const day = d.getDay();
    const hours = d.getHours();
    return {
      day,
      hours,
      dayText: DAY_MAP[day]
    }
  }, [])
};

