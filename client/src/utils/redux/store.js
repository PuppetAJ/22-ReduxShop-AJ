import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './slices/storeSlice';

const store = configureStore({
  reducer: {
    storeReducer: storeSlice,
    // If necessary add more reducers..
  }
})

export default store;

