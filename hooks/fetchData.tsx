import axios from 'axios'
import { useEffect, useState } from 'react'

import { defaultComicGeneratorAPIConfig } from '../configs/axiosConfigs'

// * Request State
// We are storing the request state as a number:
// 0 ---> Request NOT executing / finished executing
// 1 ---> Request executing / fetching / loading
// 2 ---> Request threw an arror

type RequestState = 0 | 1 | 2

const useFetchData = () => {

    const [requestState, setRequestState] = useState<RequestState>(0)
    const [data, setData] = useState(null)
    const [error, setError] = useState<any>(null)

    const isLoading = requestState === 1
    
    const fetchData = async (inputText: string) => {
        try {
            setRequestState(1)
            setError(null)
            const res = await axios({
                ...defaultComicGeneratorAPIConfig,
                data: {
                    inputs: inputText
                }
            })
            const data = res.data
            setData(data)
            setRequestState(0)
        } catch(ex) {
            setError(ex)
            setRequestState(2)
        }

    }
    
    // useEffect(() => {
    //     fetchData()
    // }, [needsRefresh])

    return { isLoading, data, error, fetchData }
}