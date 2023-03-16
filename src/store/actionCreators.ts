import * as actionTypes from './actionTypes'

export function addTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  }
  return action
}

export function deleteTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    todo,
  }
  return action
}
