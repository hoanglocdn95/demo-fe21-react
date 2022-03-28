import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { STATUS_CONTENT } from '../config/constants';

const initialState = {
  isShowModal: false,
  content: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.isShowModal = !state.isShowModal;
      state.content = action.payload.content;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
