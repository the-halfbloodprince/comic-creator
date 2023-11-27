import { ImageData, useFetchData } from '@/hooks/fetchData'
import React, { FC, useState } from 'react'
import LoadingView from './LoadingView'
import ErrorView from './ErrorView'
import DataView from './DataView'
import Input from './Input'
import ErrorIcon from '@/icons/ErrorIcon'

type Props = {}

// type InitialProps = { requestState: 0 }
// type DataProps = { requestState: 1, data: ImageData }
// type LoadingProps = { requestState: 2 }
// type ErrorProps = { requestState: 3, error: any }

// type ViewProps = InitialProps | DataProps | LoadingProps | ErrorProps

// const View: FC<ViewProps> = (props) => {

//     switch(props.requestState) {
//         case 0:
//             return <Initial />
//             break
//         case 1:
//             return <DataView 
//                 generated_image_src={}
//                 generated_image_description={props.data.description} 
//             />
//         case 2:
//             return <LoadingView />
//         case 3:
//             return <ErrorView error={props.error} />
//     }
// }

const Panel = (props: Props) => {

    const {
        requestState,
        isLoading,
        data,
        error,
        fetchData,
        abortFetch
    } = useFetchData()

    const [fitImage, setFitImage] = useState(false)

    const generated_image_src = data ? URL.createObjectURL(data.image_blob) : ""

    // requestState = 3

    // bg-[url(https://images.pexels.com/photos/19031635/pexels-photo-19031635/free-photo-of-a-window-with-a-reflection-of-trees-and-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]

    return (
        <div
            className={`
                panel relative
                h-72 lg:h-96
                border-4 border-black
                bg-white
                bg-url(${generated_image_src ? generated_image_src : ""})
            `}
        >
            <img 
                src={generated_image_src} 
                className={`absolute w-full h-full ${fitImage ? 'object-contain' : 'object-cover'}`} 
                alt={data?.description}
            />
            <div
                className={`
                    overlay
                    absolute top-0 left-0
                    w-full h-full
                    ${data ? 'bg-black/30' : 'bg-[#222]'}
                    backdrop-blur-xl
                    flex flex-col
                    justify-center gap-6
                    items-center
                    px-3
                    ${ requestState !== 1 ? '' : 'opacity-0 hover:opacity-100 transition-all duration-500' }  
                `}
            >
                {
                    requestState === 3 && (
                        <div className='text-3xl font-bold text-center flex gap-3 items-center'>
                            <ErrorIcon />
                            <h3>Oops! There was an error</h3>
                            {/* <Input buttonOnClick={fetchData} requestState={requestState} /> */}
                        </div>
                    )
                }
                {
                    isLoading
                        ? <LoadingView cancelFunction={abortFetch} />
                        : <Input buttonOnClick={fetchData} requestState={requestState} />
                }
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
                {/* {
                    requestState == 0
                        ? <InitialOverlay />
                        : requestState === 1 && data
                            ? <DataView generated_image_src={generated_image_src} generated_image_description={data.description} />
                            : requestState === 2
                                ? <LoadingView />
                                : requestState === 3 && error
                                    && <ErrorView error={error} />
                } */}
                {/* {
                    isLoading 
                        ? <LoadingView />
                        : data
                            ? <DataView
                                generated_image_src={generated_image_src}
                                generated_image_description={data.description}
                            />
                            : <ErrorView error={error} />
                } */}
                
            </div>
        </div>
    )
}

export default Panel