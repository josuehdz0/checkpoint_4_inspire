import { appState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuote(){
  setHTML('quotehere',appState.quote.quoteTemplate)
}
export class QuoteController{
  
  constructor(){
    // console.log('hello from quote controller');
    this.getQuote()
    appState.on('quote', _drawQuote)
  }

  async getQuote(){
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}