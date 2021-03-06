import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map(item => {
        if (action.payload === item.id) {
          if (item.done === true) {
            // if its done 
            item.done = false
          } else {
            // if its not done
            item.done = true
          }
        }
      })
    }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer;
