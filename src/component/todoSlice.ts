import * as actionTypes from '../store/actionTypes'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'
// import { fetchCount } from './counterAPI'

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      content: 'Buy Chicha yummzz',
      datetime: '2023-03-15',
      completed: false,
    },
    {
      id: 2,
      content: 'Eat gud steak ~',
      datetime: '2023-03-16',
      completed: false,
    },
    {
      id: 3,
      content: 'Assignmenttttt :<',
      datetime: '2023-03-16',
      completed: false,
    },
    {
      id: 4,
      content: 'Go skai!!!! >.<',
      datetime: '2023-12-06',
      completed: false,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state) => {
      state.todos.concat({
        id: Math.random(), // not really unique
        content: 'test!!!',
        datetime: '2023-03-15',
        completed: false,
      })
    },
    deleteTodo: (state) => {
      state.todos.filter((todo) => todo.id !== 1)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer

// const reducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
//   switch (action.type) {
//     case actionTypes.ADD_TODO:
//       // eslint-disable-next-line no-case-declarations
//       const newTodo: Todo = {
//         id: Math.random(), // not really unique
//         content: action.todo.content,
//         datetime: action.todo.datetime,
//         completed: false,
//       }
//       return {
//         ...state,
//         todos: state.todos.concat(newTodo),
//       }
//     case actionTypes.DELETE_TODO:
//       // eslint-disable-next-line no-case-declarations
//       const updateTodos: Todo[] = state.todos.filter((todo) => todo.id !== action.todo.id)
//       return {
//         ...state,
//         todos: updateTodos,
//       }
//   }
//   return state
// }

// export default reducer