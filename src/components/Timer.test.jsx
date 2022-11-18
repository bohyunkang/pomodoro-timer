import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import Timer from './Timer';

jest.mock('../hooks/useSound', () => () => ({
  play: jest.fn(),
  pause: jest.fn(),
}));

jest.useFakeTimers();

test('Timer', () => {
  render(<Timer />);
});

test('상태 버튼이 클릭되면 상태가 바뀐다', () => {
  const modes = [
    { id: 1, title: '작업 시간' },
    { id: 2, title: '공유 시간' },
    { id: 3, title: '쉬는 시간' },
  ];

  render(<Timer />);

  screen.getByText(modes[0].title);

  fireEvent.click(screen.getByRole('button', { name: /시간/ }));

  screen.getByText(modes[1].title);

  fireEvent.click(screen.getByRole('button', { name: /시간/ }));

  screen.getByText(modes[2].title);

  fireEvent.click(screen.getByRole('button', { name: /시간/ }));

  screen.getByText(modes[0].title);
});

test('시작 버튼이 잘 눌렸나 확인해보자.', () => {
  render(<Timer />);

  fireEvent.click(screen.getByText('시작하기'));

  screen.getByRole('button', { name: '일시정지' });
});

test('리셋 버튼이 잘 눌렸나 확인해보자.', () => {
  render(<Timer />);

  fireEvent.click(screen.getByText('리셋 하기'));

  screen.getByRole('button', { name: '시작하기' });
});
