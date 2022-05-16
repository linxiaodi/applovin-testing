import React, { useRef } from 'react';

export const useOnce = (scope: Function) => {
  const onceFlag = useRef(false)
  if (!onceFlag.current) {
    onceFlag.current = true
    scope()
  }
};

