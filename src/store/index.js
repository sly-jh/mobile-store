import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cacheMiddleware from './middleware/cacheMiddleware';

const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: getDefault =>
    getDefault({ serializableCheck: false }).concat(cacheMiddleware)
});

export default store;
