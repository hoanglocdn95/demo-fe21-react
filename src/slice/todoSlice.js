import { createSlice } from '@reduxjs/toolkit';
import { STATUS_CONTENT } from '../config/constants';

const initialState = {
  listTodo: [
    {
      content: 'Dùng create-react-app tạo app',
      status: STATUS_CONTENT.NEW,
    },
    {
      content: 'Tạo Home Page, import vào App.js',
      status: STATUS_CONTENT.DOING,
    },
    {
      content: 'Tạo UI như design trong cái link figma',
      status: STATUS_CONTENT.DONE,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo(state, action) {
      console.log('addNewTodo action', action);
      state.listTodo = [...state.listTodo, action.payload];
    },
    deleteItem(state, action) {
      console.log('deleteItem action', action);
      const arr = state.listTodo;
      arr.splice(action.payload.indexItem, 1);
      state.listTodo = [...arr];
    },
  },
});

export const { addNewTodo, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
