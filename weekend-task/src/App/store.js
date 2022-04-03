import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducers/userSlice';
import equipmentReducer from '../Reducers/equipmentSlice';

// The store used to keep the state's data
export const store = configureStore({
  reducer: {
    user: userReducer,
    equipment: equipmentReducer,
  },
});
