export class Time{
  constructor(){
    this.time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    
  }

  get timeTemplate(){
    return`
    <h1 class="text-center timefont">${this.time}</h1>
    `
  }
}