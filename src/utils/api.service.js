import axios from 'axios'

const ApiService = {
  setHeader(header) {
    axios.defaults.headers.common['Authorization'] = header
  },
  removeHeader() {
    axios.defaults.headers.common = {}
  },
  get(resource, params = null) {
    return axios.get(resource, params).then(
      res => res.data
    )
  },
  post(resource, data) {
    return axios.post(resource, data).then(
      res => res.data
    )
  },
  patch(resource, data) {
    return axios.patch(resource, data).then(
      res => res.data
    )
  },
  delete(resource) {
    return axios.delete(resource).then(
      res => res.data
    )
  },
  customRequest(data) {
    return axios(data).then(
      res => res.data
    )
  },
  all(arr) {
    return axios.all(arr).then(
      res => res
    )
  }
}

export default ApiService