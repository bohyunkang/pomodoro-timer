import axios from 'axios';

export default class QuoteService {
  instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  async fetchQuotes() {
    const { data } = await this.instance.get('/data/data.json');

    return data;
  }
}

export const quoteService = new QuoteService();
