import { fireEvent, render, screen } from '@testing-library/react';
import TodayQuote from './TodayQuote';

jest.mock('../hooks/useQuoteStore', () => () => ({
  quote: { author: '강보니', message: '오늘을 행복하게 살면 된다.' },
  fetchQuote: jest.fn(),
}));

test('TodayQuote 명언이 잘 나오는지 확인해보자.', () => {
  render(<TodayQuote />);

  screen.getByText('오늘을 행복하게 살면 된다.');
});

test('TodayQuote 새로운 명언이 잘 가져와지는지 확인해보자.', () => {
  render(<TodayQuote />);

  fireEvent.click(screen.getByRole('button', { name: '다른 명언 보기' }));

  expect(screen.getByRole('heading', { level: 3 })).not.toBeNull();
});
