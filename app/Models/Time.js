export class Time{
  constructor(){
    this.time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    
  }

  get timeTemplate(){
    return`
    <h1>${this.time}</h1>
    `
  }
}