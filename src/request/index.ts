import axios from 'axios';

export const request = axios.create({})

request.interceptors.response.use((response) => {
  return response.data.results
}, () => {
  return Promise.reject(new Error('request error'))
})

export const PRIVATE_KEY = 'SlLxjP6GHoZAQKp-J'
