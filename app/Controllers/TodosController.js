import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos(){
  let template = ''
  appState.todos.forEach(t => template += t.TodoList)
  setHTML('todos', template)
  // setHTML('todos', Todo.todoForm({}))
}

export class TodosController{
  constructor(){
    this.getTodos()
    console.log('todo controller?');
    appState.on('todos', _drawTodos)
  }

  async getTodos(){
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async createTodo(){
    try {
      window.event?.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      form.reset()
      await todosService.createTodo(formData)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }


  async removeTodo(todoId){
    try {
      if (await Pop.confirm()) {
        await todosService.removeTodo(todoId)
      }
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }


}