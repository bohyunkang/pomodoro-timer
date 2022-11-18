import { quoteService } from '../services/QuoteService';
import Store from './Store';

export default class QuoteStore extends Store {
  constructor() {
    super();

    this.quote = {};
  }

  async fetchQuote() {
    this.quote = await quoteService.fetchQuote();

    this.publish();
  }
}

export const quoteStore = new QuoteStore();
