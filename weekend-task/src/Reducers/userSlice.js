import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', place: '', date: Date() },
};
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
}, [], (state) => state);

export const { updateUser } = counterSlice.actions

export default counterSlice.reducer;

