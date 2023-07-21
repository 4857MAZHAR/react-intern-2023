import {configureStore} from '@reduxjs/toolkit';
import productreducer from './productslice';
const store = configureStore({
  reducer: {
    products: productreducer,
  },
});

export default store;
