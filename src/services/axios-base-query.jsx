import axios from 'axios'
import { toast } from 'react-toastify'

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({ url, method, data }, api, extraOptions) => {
  try {
    const result = await axios({ url: baseUrl + url, method, data })
    return { data: result.data }
  } catch (axiosError) {
    const err = axiosError

    if (!extraOptions?.noErrors) {
      switch (err.response.status) {
        case 401:
        case 404: {
          toast.error(err.response.data.message)
          break
        }
        case 406: {
          err.response.data.errors.forEach((error) => {
            toast.error(error.msg)
          })
          break
        }
        default: {
          toast.error('The server had an error!')
        }
      }
    }

    return {
      error: { status: err.response?.status, data: err.response?.data }
    }
  }
}

export default axiosBaseQuery
