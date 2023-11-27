import React, {FC} from 'react'

type Props = {
    error: any;
}

const ErrorView: FC<Props> = ({ 
    error
}) => {

    return (
        <div>
        <h1>There&apos;s an error.</h1>
        {/* <button>Retry</button> */}
        <details>
            <summary>See error</summary>
            <p>{JSON.stringify(error)}</p>
        </details>
        {/* <Input buttonOnClick={fetchData} /> */}
        </div>
    )
}

export default ErrorView