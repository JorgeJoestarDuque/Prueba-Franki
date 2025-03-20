import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return state = action.payload
    },
  },
});

export const { getTasks } = tasksSlice.actions;

export default tasksSlice.reducer;