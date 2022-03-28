import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { STATUS_CONTENT } from '../config/constants';

const initialState = {
  listTodo: [],
};

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const res = await axios
    .get('http://localhost:3001/todos')
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log('fetchTodos ~ error', error);
    });
  return res;
});

export const addNewTodo = createAsyncThunk('todo/addNewTodo', async (payload, store) => {
  console.log('addNewTodo ~ payload', payload);
  const res = await axios
    .post('http://localhost:3001/todos', payload)
    .then((result) => {
      console.log('.then ~ result', result);
      store.dispatch(fetchTodos());
    })
    .catch((error) => {
      console.log('addNewTodo ~ error', error);
    });
  return res;
});

export const deleteItem = createAsyncThunk('todo/deleteItem', async (payload, store) => {
  const res = await axios
    .delete(`http://localhost:3001/todos/${payload.id}`)
    .then((result) => {
      console.log('.then ~ result', result);
      store.dispatch(fetchTodos());
    })
    .catch((error) => {
      console.log('deleteItem ~ error', error);
    });
  return res;
});

export const changeStatus = createAsyncThunk('todo/changeStatus', async (payload, store) => {
  const res = await axios
    .patch(`http://localhost:3001/todos/${payload.id}`, { status: payload.status })
    .then((result) => {
      console.log('.then ~ result', result);
      store.dispatch(fetchTodos());
    })
    .catch((error) => {
      console.log('changeStatus ~ error', error);
    });
  return res;
});

export const saveContent = createAsyncThunk('todo/saveContent', async (payload, store) => {
  const res = await axios
    .patch(`http://localhost:3001/todos/${payload.id}`, { content: payload.content })
    .then((result) => {
      console.log('.then ~ result', result);
      store.dispatch(fetchTodos());
    })
    .catch((error) => {
      console.log('saveContent ~ error', error);
    });
  return res;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // addNewTodo(state, action) {
    //   state.listTodo = [...state.listTodo, action.payload];
    // },
    // deleteItem(state, action) {
    //   const arr = state.listTodo;
    //   arr.splice(action.payload.indexItem, 1);
    //   state.listTodo = [...arr];
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {})
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.listTodo = [...action.payload];
      })
      .addCase(fetchTodos.rejected, (state, action) => {})
      .addCase(addNewTodo.pending, (state, action) => {})
      .addCase(addNewTodo.fulfilled, (state, action) => {})
      .addCase(addNewTodo.rejected, (state, action) => {})
      .addCase(deleteItem.pending, (state, action) => {})
      .addCase(deleteItem.fulfilled, (state, action) => {})
      .addCase(changeStatus.pending, (state, action) => {})
      .addCase(changeStatus.fulfilled, (state, action) => {})
      .addCase(saveContent.pending, (state, action) => {})
      .addCase(saveContent.fulfilled, (state, action) => {});
  },
});

export default todoSlice.reducer;
