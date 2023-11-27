import React, { FC } from 'react'
import Panel from './Panel'
import './ComicStripTemplate1.css'

type Props = {}

const ComicStripTemplate1: FC<Props> = async () => {

  const numOfPanels = 10

  return (
    <div className='w-full px-auto'>
        <h3
          className='text-center text-2xl my-3 w-fit mx-auto px-2'
          contentEditable
        >Template 1</h3>
        <div
            className='
                w-full max-w-6xl mx-auto
                p-2

                bg-white

                grid gap-3
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
            '
        >
            {
                Array
                  .from({length: numOfPanels}, (_, i) => i+1)
                  .map(i => <Panel key={i} />)
            }
        </div>
    </div>
  )
}

export default ComicStripTemplate1