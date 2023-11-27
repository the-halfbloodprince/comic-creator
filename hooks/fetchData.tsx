import axios from 'axios'
import { useState } from 'react'

import { defaultComicGeneratorAPIConfig } from '../configs/axiosConfigs'

// * Request State
// We are storing the request state as a number:
// 0 ---> Initial State
// 1 ---> Request NOT executing / finished executing
// 2 ---> Request executing / fetching / loading
// 3 ---> Request threw an arror

type RequestState = 0 | 1 | 2 | 3

export type ImageData = {
    image_blob: Blob;
    description: string;
}

export const useFetchData = () => {

    const controller = new AbortController()

    const [requestState, setRequestState] = useState<RequestState>(0)
    const [data, setData] = useState<ImageData | null>(null)
    const [error, setError] = useState<any>(null)

    const isLoading = requestState === 2
    
    const fetchData = async (inputText: string) => {
        
        const startTime = Date.now()
        
        try {

            setRequestState(2)
            setError(null)
            
            const res = await axios({
                ...defaultComicGeneratorAPIConfig,
                data: {
                    inputs: inputText
                },
                signal: controller.signal
            })
            
            const data = {
                image_blob: res.data,
                description: inputText
            }

            setData(data)
            setRequestState(1)
            
            console.log(`time elapsed: ${(Date.now() - startTime) / 1000}s`)
        
        } catch(ex) {
            
            setError(ex)
            setData(null)
            setRequestState(3)
        }

    }

    const abortFetch = () => {    
        controller.abort()
        setRequestState(0)
        setData(null)
        setError(null)
    }
    
    return { requestState, isLoading, data, error, fetchData, abortFetch }
}