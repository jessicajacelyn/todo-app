import * as actionTypes from './actionTypes'

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

const reducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      // eslint-disable-next-line no-case-declarations
      const newTodo: Todo = {
        id: Math.random(), // not really unique
        content: action.todo.content,
        datetime: action.todo.datetime,
        completed: false,
      }
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      }
    case actionTypes.DELETE_TODO:
      // eslint-disable-next-line no-case-declarations
      const updateTodos: Todo[] = state.todos.filter((todo) => todo.id !== action.todo.id)
      return {
        ...state,
        todos: updateTodos,
      }
  }
  return state
}

export default reducer
