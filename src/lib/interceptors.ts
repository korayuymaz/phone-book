import axios from 'axios'

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3050', // Replace with your API's base URL
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request (e.g., add an Authorization header)
    if (config.url !== '/login') {
      const token = localStorage.getItem('token') // Retrieve token from localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    } else return config
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Process the response data
    return response
  },
  (error) => {
    // Handle the response error (e.g., redirect on 401 Unauthorized)
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
