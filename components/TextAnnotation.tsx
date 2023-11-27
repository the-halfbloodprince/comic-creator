import { ImageAnnotation } from '@/redux/annotations/annotationsSlice';
import React, { FC } from 'react'

type Props = {
    annotation: ImageAnnotation;
}

const TextAnnotation: FC<Props> = ({ annotation }) => {
  return (
    <div 
        contentEditable draggable
    >TextAnnotation</div>
  )
}

export default TextAnnotation