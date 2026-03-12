import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      {
        task: "Wake Up",
        isCompleted: false,
        id: "abc",
      },
    ],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      const { index, id } = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTask(state, action) {
      const { id , updatedTaskTASK} = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.task = updatedTaskTASK;
      }
    },
    toggleTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
});

export const { addTask, removeTask, updateTask, toggleTask } =
  todoSlice.actions;
export default todoSlice.reducer;
