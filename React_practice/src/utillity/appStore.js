import {configureStore} from '@reduxjs/toolkit'
import dummyReducer from './slice/dummySlice'

const appStore = configureStore({
  reducer: {
    dummy : dummyReducer
  },
});

export default appStore