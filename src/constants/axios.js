import axios from "axios"

export const API_URL = 'http://167.172.39.139/api/v1/'

export const axiosInstance = axios.create({
  baseURL: API_URL
})
