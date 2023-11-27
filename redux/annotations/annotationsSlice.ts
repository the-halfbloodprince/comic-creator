import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ImageAnnotation = {
    annotationType: 'speech_bubble' | 'annotation';
    id: number;
    x_pos: number;
    y_pos: number;
    content: string;
}

export type EditAnnotationAttributes = {
    id: number;
    x_pos: number;
    y_pos: number;
    content: string;
}

const initialState: ImageAnnotation[] = []

export const annotations = createSlice({
  name: 'annotations',
  initialState,
  reducers: {
    addSpeechBubble: (state) => {
        const newState = [...state]
        newState.push({
          annotationType: 'speech_bubble',
          id: state.length + 1,
          content: "enter content",
          x_pos: innerWidth / 2,
          y_pos: innerHeight / 2,
        })
        state = newState
    },
    addAnnotation: (state) => {
        const newState = [...state]
        newState.push({
            annotationType: 'annotation',
            id: state.length + 1,
            content: "enter content",
            x_pos: innerWidth / 2,
            y_pos: innerHeight / 2,
        })
        state = newState
    },
    editAnnotation(state, action: PayloadAction<EditAnnotationAttributes>) {
        const newState = [...state]
        const idx = newState.findIndex((s) => s.id === action.payload.id)
        newState[idx] = {...newState[idx], ...action}
        state = newState
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAnnotation, addSpeechBubble, editAnnotation } = annotations.actions

export default annotations.reducer