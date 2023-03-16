interface Todo {
  id: number
  content: string
  datetime: string
  completed: boolean
}

type TodoState = {
  todos: Todo[]
}

type TodoAction = {
  todo: Todo
  type: string
}

type DispatchType = (args: TodoAction) => TodoAction
