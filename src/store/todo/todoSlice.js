import {createSlice} from '@reduxjs/toolkit';
import {todos} from '../../utils/data/todos';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todo: todos,
  },
  reducers: {
    completetodo: (state, action) => {
      state.todo = state.todo.filter(item => item.id !== action.payload);
    },
  },
});

export const {completetodo} = todoSlice.actions;
export default todoSlice.reducer;
