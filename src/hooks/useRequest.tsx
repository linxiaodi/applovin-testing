import React, { useEffect, useRef, useState } from 'react';
import { useOnce } from './useOnce';

export type UseRequestOption = {
  initial?: unknown,
  cacheKey?: string
  silentWhenOffline?: boolean
}

export interface IUseRequestReturn<T> {
  data: T
  error: Error | null
  loading: boolean,
  run: () => unknown
}

export interface IUseRequest<Data = any> {
  (request: () => Promise<Data>, options: UseRequestOption): IUseRequestReturn<Data>
}

const DEFAULT_OPTIONS = {
  initial: null,
  silentWhenOffline: false
}

export function useRequest<Data = any> (request: () => Promise<Data>, options: UseRequestOption = DEFAULT_OPTIONS) {
  const { cacheKey, silentWhenOffline } = options;
  const [data, setData] = useState<Data | null>(() => {
    if (cacheKey) {
      let data = localStorage.getItem(cacheKey)
      if (data) {
        return JSON.parse(data) as Data
      }
    }
    return null;
  })
  const [loading, _setLoading] = useState<boolean>(() => {
    return !(cacheKey && localStorage.getItem(cacheKey))
  })

  const [error, setError] = useState<Error | null>(null)

  const setLoading = (val: boolean) => {
    if (val && cacheKey && localStorage.getItem(cacheKey)) {
      // silent loading
    } else {
      _setLoading(val)
    }
  }

  const run = () => {
    setLoading(true)
    return request().then((data) => {
      setData(data)
      setLoading(false)
      if (cacheKey) {
        localStorage.setItem(cacheKey, JSON.stringify(data))
      }
    }, (e) => {
      setLoading(false)
      if (silentWhenOffline) {
        return new Promise(() => {})
      }
      setError(e)
    })
  }

  useOnce(() => {
    run()
  })

  return {
    run,
    data,
    loading,
    error
  }
}
