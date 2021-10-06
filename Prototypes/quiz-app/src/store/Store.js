import { configureStore } from '@reduxjs/toolkit'
import isDocent from './reducers'

export default configureStore({
  reducer: {
      isDocent
  },
})