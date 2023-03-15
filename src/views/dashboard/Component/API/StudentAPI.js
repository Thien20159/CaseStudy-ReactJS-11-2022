import axiosClient from '../Common/AxiosClient'
const url = 'Student'
const studentAPI = {
  getAll: () => {
    return axiosClient.get(url)
  },
  getById: (id) => {
    return axiosClient.get(`${url}/${id}`)
  },
  getByName: (id) => {
    return axiosClient.get(`${url}?id=${id}`)
  },
  delete: (id) => {
    return axiosClient.delete(`${url}/${id}`)
  },
  create: (params) => {
    return axiosClient.post(url, params)
  },
  update: (params) => {
    return axiosClient.put(url, params)
  },
}
export default studentAPI
