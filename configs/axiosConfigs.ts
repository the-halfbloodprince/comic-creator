import type { AxiosRequestConfig } from 'axios'

export const defaultComicGeneratorAPIConfig: AxiosRequestConfig = {
    url: process.env.IMAGE_GEN_API_URL,
    method: 'post',
    headers: {
        "Accept": "image/png",
        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
        "Content-Type": "application/json",
    },
}