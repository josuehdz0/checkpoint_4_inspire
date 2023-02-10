export class Todo{

  constructor(data){
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get TodoList(){
    return`
    <div class="row d-flex">
                <p> ${this.description} <i class="mdi mdi-trash-can"></i></p>
              </div>
    `
  }
}