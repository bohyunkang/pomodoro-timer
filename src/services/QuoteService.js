import axios from 'axios';

export default class QuoteService {
  instance = axios.create({
    baseURL: 'https://bohyunkang.github.io/pomodoro-timer',
  });

  async fetchQuotes() {
    const { data } = await this.instance.get('/data/data.json');

    return data;
  }
}

export const quoteService = new QuoteService();
