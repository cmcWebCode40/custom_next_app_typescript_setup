import { configureStore } from '@reduxjs/toolkit';
import sampleSlice from './libs/slices/sampleSlice';

export default configureStore({
  reducer: {
    sampleSlice
  },
  devTools: true
});
