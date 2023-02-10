export class Todo{

  constructor(data){
    this.completed = data.completed || false
    this.description = data.description
    this.user = data.user
  }

  get TodoList(){
    return`
    <div class="row my-1">
      <div class="col-2 d-flex justify-content-center"><input ${this.completed ? 'checked' : ''} type="checkbox"></div>
      <div class="col-8 d-flex justify-content align-items-center">
        <h6>${this.description}</h6>
      </div>
      <div class="col-2 d-flex justify-content-center">
      <button class="btn btn-danger">
      <i class="mdi mdi-trash-can"></i>
    </button>
      </div>
    </div>
    `
  }
}