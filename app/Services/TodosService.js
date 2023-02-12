import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService{
  async checkTodo(todoId) {
    const todoIndex = appState.todos.findIndex(t => t.id == todoId)
    const foundTodo = appState.todos[todoIndex]
    // console.log(foundTodo);
    const res = await sandboxApi.put(`/josue/todos/${todoId}`, {completed: !foundTodo.completed })
    // console.log('toggle todo', res.data);
    appState.todos.splice(todoIndex, 1, new Todo(res.data))
    appState.emit('todos')
  }
  async removeTodo(todoId) {
    const res = await sandboxApi.delete('/josue/todos/'+ todoId)
    // console.log('removing todo', res.data);
    appState.todos = appState.todos.filter(todo => todo.id != todoId)
  }
  async createTodo(formData) {
    const res = await sandboxApi.post('/josue/todos', formData)
    // console.log('created todo', res.data);
    let actualTodo = new Todo(res.data)
    appState.todos.push(actualTodo)
    appState.emit('todos')
  }
  async getTodos() {
    const res = await sandboxApi.get('/josue/todos')
    // console.log('got todos', res.data);
    const newArray = res.data.map(todo => new Todo(todo))
    appState.todos = newArray
    // console.log(appState.todos);
  }

}

export const todosService = new TodosService()