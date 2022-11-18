import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useSound', () => () => ({
  play: jest.fn(),
  pause: jest.fn(),
}));

test('App 시간 세팅 버튼이 잘 눌리나 확인하자.', () => {
  render(<App />);

  screen.getByRole('heading', { level: 1 });

  fireEvent.click(screen.getByRole('button', { name: '시간 세팅' }));

  expect(screen.queryByText('시간 세팅')).not.toBeNull();
  expect(screen.queryByText('작업 시간')).not.toBeNull();
  expect(screen.queryByText('공유 시간')).not.toBeNull();
  expect(screen.queryByText('쉬는 시간')).not.toBeNull();
});

test('App 명언 버튼이 잘 눌리나 확인하자.', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: '오늘의 명언' }));

  expect(screen.getByRole('button', { name: '다른 명언 보기' })).not.toBeNull();
  expect(screen.getByRole('button', { name: '돌아가기' })).not.toBeNull();
});

test('App 타이머 화면으로 잘 돌아오나 확인하자.', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: '오늘의 명언' }));

  fireEvent.click(screen.getByRole('button', { name: '돌아가기' }));

  screen.getByText(/뽀그로 타이머/);
});
