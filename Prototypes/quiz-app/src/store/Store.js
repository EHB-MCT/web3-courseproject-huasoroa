import { configureStore } from '@reduxjs/toolkit'
import docentReducer from './reducers/isDocent'
import counterReducer from './reducers/Counter'

export default configureStore({
  reducer: {
      isDocent : docentReducer,
      counter : counterReducer
  },
  

})