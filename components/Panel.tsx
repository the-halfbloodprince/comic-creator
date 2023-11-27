import { useFetchData } from '@/hooks/fetchData'
import React, { FC, useState } from 'react'
import LoadingView from './LoadingView'
import Input from './Input'
import ErrorIcon from '@/icons/ErrorIcon'

type Props = {}

const Panel: FC<Props> = () => {

    const {
        requestState,
        isLoading,
        data,
        fetchData,
        abortFetch
    } = useFetchData()

    const [fitImage, setFitImage] = useState(false)

    const generated_image_src = data ? URL.createObjectURL(data.image_blob) : ""

    const defaultImageSrc = 'https://images.pexels.com/photos/3671144/pexels-photo-3671144.jpeg?auto=compress&cs=tinysrgb&w=600'

    return (
        <div
            className={`
                panel relative
                h-72 lg:h-96
                border-4 border-black
                bg-white
                bg-url(${generated_image_src ? generated_image_src : defaultImageSrc})
            `}
        >
            
            {/* generated image */}
            <img 
                src={data ? generated_image_src : defaultImageSrc } 
                className={`absolute w-full h-full ${fitImage ? 'object-contain' : 'object-cover'}`} 
                alt={data?.description}
            />

            <div
                className={`
                    overlay
                    absolute top-0 left-0
                    w-full h-full
                    bg-black/80
                    backdrop-blur-xl
                    flex flex-col
                    justify-center gap-6
                    items-center
                    px-3
                    ${ requestState !== 1 ? '' : 'opacity-0 hover:opacity-100 transition-all duration-500' }  
                `}
            >
                {/* if error -> show it along with the inputs */}
                {
                    requestState === 3 && (
                        <div className='text-3xl font-bold text-center flex gap-3 items-center'>
                            <ErrorIcon />
                            <h3>Oops! There was an error</h3>
                        </div>
                    )
                }
                {/* if loading -> show loading state */}
                {/* if not loading -> show input UI */}
                {
                    isLoading
                        ? <LoadingView cancelFunction={abortFetch} />
                        : <Input buttonOnClick={fetchData} requestState={requestState} />
                }
                {/* if content is fetched (data is there) */}
                {/* add toggle to switch between fit and fill image */}
                {
                    requestState === 1 && (
                        <button 
                            className='absolute bottom-2 right-2' 
                            onClick={() => setFitImage(!fitImage)}
                        >
                            {fitImage ? 'Fill' : 'Fit'} Image
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Panel