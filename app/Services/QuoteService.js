import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuoteService{
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    // console.log('the quote', res.data);
    appState.quote = new Quote(res.data)
  }

}
export const quoteService = new QuoteService()