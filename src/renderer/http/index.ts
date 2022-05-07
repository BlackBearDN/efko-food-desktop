import axios from "axios"

export const REST_API_URL = `http://localhost:5000`

export const $rest_api = axios.create({
  withCredentials: true,
  baseURL: REST_API_URL
})

$rest_api.interceptors.request.use((config) => {
  return config
})
