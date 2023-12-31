import React, { FC } from 'react'

type Props = {
    error: any;
}

const ErrorView: FC<Props> = ({ 
    error
}) => {

    return (
        <div>
            <h1>There&apos;s an error.</h1>
            <details className='max-h-16 overflow-scroll'>
                <summary>See error</summary>
                <p>{JSON.stringify(error)}</p>
            </details>
        </div>
    )
}

export default ErrorView