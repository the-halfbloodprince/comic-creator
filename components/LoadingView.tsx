import React, { FC } from 'react'
import { CirclesWithBar, Triangle } from 'react-loader-spinner'

type Props = {
    cancelFunction: Function;
}

const LoadingView: FC<Props> = ({ cancelFunction }) => {
    return (
        <div className='w-full h-full grid place-items-center'>
           {/* <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            /> */}
            <Triangle
                height="80"
                width="80"
                color="#42FF00"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                // wrapperClassName=""
                visible={true}
            />

            <button className='text-xl bg-red-600 px-4 py-3 rounded-lg hover:bg-red-800' onClick={() => cancelFunction()}>Cancel</button>
        </div>
    )
}

export default LoadingView