export class Quote {
  constructor(data){
    this.content = data.content
    this.author = data.author
  }


  get quoteTemplate(){
    return`
    
      <h4> ${this.content} </h4>
      <div class="text-center on-hover ">${this.author}</div>
   
    `
  }
}