import axios from "axios"

export const API_URL = 'http://82.221.141.66/api/v1/'

export const axiosInstance = axios.create({
  baseURL: API_URL
})
