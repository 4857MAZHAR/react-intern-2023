import {configureStore} from '@reduxjs/toolkit';
import todoreducer from './todo/todoSlice';
const store = configureStore({
  reducer: {
    todos: todoreducer,
  },
});

export default store;
