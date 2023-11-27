import { ImageAnnotation, editAnnotation } from '@/redux/annotations/annotationsSlice'
import React, { FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

type Props = {
    annotation: ImageAnnotation
}

const SpeechBubble: FC<Props> = ({ annotation }) => {

  const annotationRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const [content, setContent] = useState("")

  const editAnnotation: Function = ({ content }: { content?: string }) => dispatch(editAnnotation({
        id: annotation.id,
        content: content ? content : annotationRef.current !== null ? annotationRef.current.innerText : "",
        x_pos: annotationRef.current !== null ? annotationRef.current.getBoundingClientRect().x : innerWidth / 2,
        y_pos: annotationRef.current !== null ? annotationRef.current.getBoundingClientRect().y : innerHeight / 2,
  }))

  const handleContentChange = (e: ContentEditableEvent) => {
    editAnnotation({content})
  }

  const handleDrag = () => {
    editAnnotation()
  }

  return (
    <div draggable
        onDrag={handleDrag}
    >
        <ContentEditable
            html={content}
            onChange={handleContentChange}    
        />
    </div>
  )
}

export default SpeechBubble