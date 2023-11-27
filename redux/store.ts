import { configureStore } from '@reduxjs/toolkit'
import AnnotationReducer from './annotations/annotationsSlice'

export const store = configureStore({
  reducer: {
    annotations: AnnotationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch