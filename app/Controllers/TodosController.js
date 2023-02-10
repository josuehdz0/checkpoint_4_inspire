import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos(){
  let template = ''
  appState.todos.forEach(t => template += t.TodoList)
  setHTML('todos', template)
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

  asnyc createTodo(){
    try {
      window.event?.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      await todosService.createTodo(formData)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }

  }
}