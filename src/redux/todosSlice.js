import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTask: (state, action ) => {
            state.push(action.payload);
        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
    },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;