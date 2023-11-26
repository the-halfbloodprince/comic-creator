import type { AxiosRequestConfig } from 'axios'

export const defaultComicGeneratorAPIConfig: AxiosRequestConfig = {
    url: process.env.NEXT_PUBLIC_IMAGE_GEN_API_URL,
    method: 'post',
    headers: {
        "Accept": "image/png",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_IMAGE_GEN_AUTH_KEY}`, 
        "Content-Type": "application/json",
    },
    responseType: 'blob'
}