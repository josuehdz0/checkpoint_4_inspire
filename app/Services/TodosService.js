import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService{
  async createTodo(formData) {
    const res = await sandboxApi.post('/josue/todos', formData)
    console.log('created todo', res.data);
    let actualTodo = new Todo(res.data)
    appState.todos.push(actualTodo)
    appState.emit('todos')
  }
  async getTodos() {
    const res = await sandboxApi.get('/josue/todos')
    console.log('got todos', res.data);
    const newArray = res.data.map(todo => new Todo(todo))
    appState.todos = newArray
    console.log(appState.todos);
  }

}

export const todosService = new TodosService()