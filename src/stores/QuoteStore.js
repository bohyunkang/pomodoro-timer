import { quoteService } from '../services/QuoteService';
import Store from './Store';

export default class QuoteStore extends Store {
  constructor() {
    super();

    this.quotes = [];

    this.quote = '';
  }

  async fetchQuote() {
    this.quotes = await quoteService.fetchQuotes();

    const randomNumber = Math.floor(Math.random() * 500);

    this.quote = this.quotes[randomNumber];

    this.publish();
  }
}

export const quoteStore = new QuoteStore();
