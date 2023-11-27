import React from 'react'

type Props = {}

const AnnotationsBar = (props: Props) => {
  return (
    <div 
        className='
            fixed bottom-6 
            flex w-fit gap-8 left-1/2 -translate-x-1/2
            bg-black/50 border-2 rounded-md px-4 py-3 border-white
        '>
        <button className=''>Add annotation</button>
        <button className=''>Add speech bubble</button>
    </div>
  )
}

export default AnnotationsBar