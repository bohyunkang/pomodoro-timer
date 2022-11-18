import axios from 'axios';

export default class QuoteService {
  instance = axios.create({
    baseURL: 'https://api.adviceslip.com',
  });

  async fetchQuote() {
    const { data } = await this.instance.get('/advice');
    const { slip } = data;

    return slip;
  }
}

export const quoteService = new QuoteService();
