import { ImageAnnotation } from '@/app/page'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { addSpeechBubble, addAnnotation } from '@/redux/annotations/annotationsSlice'
import { useDispatch } from 'react-redux'

type Props = {}

const AnnotationsBar: FC<Props> = () => {
    
  const dispatch = useDispatch()

  const addAnnotation = (type: 'speech_bubble' | 'annotation') => {
    const newAnnotations = [...annotations]
    newAnnotations.push({
        annotationType: type,
        id: annotations.length + 1 // this is not a correct approach if we are to also remove these elements. but since we are not, this works fine
    })
    setAnnotations(newAnnotations)
  }

  return (
    <div 
        className='
            fixed bottom-6 
            flex w-fit gap-8 left-1/2 -translate-x-1/2
            bg-black/50 border-2 rounded-md px-4 py-3 border-white
        '>
        <button className='' onClick={() => addAnnotation('annotation')}>Add annotation</button>
        <button className='' onClick={() => addAnnotation('speech_bubble')}>Add speech bubble</button>
    </div>
  )
}

export default AnnotationsBar