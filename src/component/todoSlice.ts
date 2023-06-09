import * as actionTypes from '../store/actionTypes'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'

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
  completed: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      console.log('addTodo', state)
      // state.todos.push({
      //   id: Math.floor(Math.random() * 100) + 1, // not really unique
      //   content: 'test!!!',
      //   datetime: '2023-03-15',
      //   completed: false,
      // })
      state.todos.push(action.payload)
      console.log('added', state)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      console.log('deleteTodo', action.payload)
      const updateTodos: Todo[] = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = updateTodos
      console.log('deleted', state)
    },
    moveToCompleted: (state, action: PayloadAction<number>) => {
      console.log('moveToCompleted', action.payload)
      const t: Todo = state.todos.find((todo) => todo.id === action.payload) as Todo
      t.completed = true
      const updateTodos: Todo[] = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = updateTodos
      state.completed.push(t)
      console.log('moved', state)
    },
  },
})

export const { addTodo, deleteTodo, moveToCompleted } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.todos

export const selectCompleted = (state: RootState) => state.todo.completed

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
