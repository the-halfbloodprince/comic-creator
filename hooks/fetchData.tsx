import axios from 'axios'
import { useEffect, useState } from 'react'

import { defaultComicGeneratorAPIConfig } from '../configs/axiosConfigs'

// * Request State
// We are storing the request state as a number:
// 0 ---> Request NOT executing / finished executing
// 1 ---> Request executing / fetching / loading
// 2 ---> Request threw an arror

type RequestState = 0 | 1 | 2

type ImageData = {
    image_blob: Blob;
    description: string;
}

export const useFetchData = () => {

    const [requestState, setRequestState] = useState<RequestState>(0)
    const [data, setData] = useState<ImageData | null>(null)
    const [error, setError] = useState<any>(null)

    const isLoading = requestState === 1
    
    const fetchData = async (inputText: string) => {
        console.log(inputText)
        const startTime = Date.now()
        console.log(defaultComicGeneratorAPIConfig)
        try {
            console.log('fetching')
            setRequestState(1)
            setError(null)
            const res = await axios({
                ...defaultComicGeneratorAPIConfig,
                data: {
                    inputs: inputText
                }
            })
            const data = {
                image_blob: res.data,
                description: inputText
            }
            // const data = res.data
            setData(data)
            setRequestState(0)
            console.log('setted data')
            console.log(data)
            console.log(`time elapsed: ${(Date.now() - startTime) / 1000}s`)
        } catch(ex) {
            console.log('error')
            console.log(error)
            console.log(`time elapsed: ${(Date.now() - startTime) / 1000}s`)
            setError(ex)
            setData(null)
            setRequestState(2)
        }

    }
    
    // useEffect(() => {
    //     fetchData()
    // }, [needsRefresh])

    return { isLoading, data, error, fetchData }
}