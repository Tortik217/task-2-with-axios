import type {AxiosRequestConfig} from 'axios'
import axios from 'axios'
import {configGlobal} from "../../config"

const axiosInstance = axios.create({
    baseURL: configGlobal.baseApiUrl,
    validateStatus: (status) => status >= 200 && status < 400
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('axiosInstance.interceptors response error', error)
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
    }
)

export default axiosInstance

export const fetcher = async (
    url: string,
    config: AxiosRequestConfig = {},
) => {
    try {
        const res = await axiosInstance(url, {
            ...config,
            method: config?.method ?? 'GET',
        })

        return res.data
    } catch (error) {
        console.error('Failed to fetch:', error)
        throw error
    }
}
