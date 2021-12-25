import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducers/userSlice';
import equipmentReducer from '../Reducers/equipmentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    equipment: equipmentReducer,
  },
});
