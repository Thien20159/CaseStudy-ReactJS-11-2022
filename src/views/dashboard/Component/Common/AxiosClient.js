import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://64057d3440597b65de38692a.mockapi.io/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  paramsSerializer: (params) => params,
})
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response
    }
  },
  (error) => {
    throw error
  },
)
export default axiosClient
