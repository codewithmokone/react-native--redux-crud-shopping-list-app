import { configureStore } from '@reduxjs/toolkit';
import addDataSlice from './Slices/AddDataSlice';
import fetchDataSlice from './Slices/fetchDataSlice';
import deleteDataSlice from './Slices/deleteDataSlice';

export const store = configureStore({
  reducer: {
    AddData: addDataSlice,
    data: fetchDataSlice,
    deleteItem: deleteDataSlice,
  },
})