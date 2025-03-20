import { createSlice } from "@reduxjs/toolkit";

const initialTask = [
  {
      title: 'Hola 1',
      description: 'Pendejo 1'
  },
  {
title: 'Hola 1',
      description: 'Pendejo 1'
  },
  {
title: 'Hola 1',
      description: 'Pendejo 1'
  }
]

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTask,
  reducers: {
    getTasks: (state, action) => {
      return action.payload;
    },
  },
});

export const { getTasks } = tasksSlice.actions;

export default tasksSlice.reducer;