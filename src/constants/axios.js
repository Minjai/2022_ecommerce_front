import axios from "axios"

export const axiosInstance = axios.create({
  baseURL:'http://167.172.39.139/api/v1/'
})
