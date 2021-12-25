import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    equipment: [],
};

export const counterSlice = createSlice({
    name: 'updateEquipment',
    initialState,
    reducers: {
        updateEquipment: (state, action) => {
            state.equipment = action.payload;
        },
    },
}, [], (state) => state);

export const { updateEquipment } = counterSlice.actions

export default counterSlice.reducer;

