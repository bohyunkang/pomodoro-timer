import { fireEvent, render, screen } from '@testing-library/react';
import TimerSetting from './TimerSetting';

const mockChangeModes = jest.fn();
const mockChangeSetting = jest.fn();

jest.mock('../hooks/useTimerStore', () => () => ({
  changeModes: mockChangeModes,
}));

jest.mock('../hooks/useTimerFormStore', () => () => ({
  modes: {
    work: { mode: '작업 시간', minute: 0, second: 10 },
    share: { mode: '공유 시간', minute: 0, second: 10 },
    rest: { mode: '쉬는 시간', minute: 0, second: 10 },
  },
  changeSetting: mockChangeSetting,
}));

test('TimerSetting', () => {
  const handleClickTimer = jest.fn();

  render(<TimerSetting close={handleClickTimer} />);
});

test('handleClickSetting 확인', () => {
  const handleClickTimer = jest.fn();

  render(<TimerSetting close={handleClickTimer} />);

  fireEvent.click(screen.getByRole('button'), { name: '완료' });

  expect(handleClickTimer).toBeCalled();
  expect(mockChangeModes).toBeCalled();
});

test('handleChange 확인', () => {
  const handleClickTimer = jest.fn();

  render(<TimerSetting close={handleClickTimer} />);

  fireEvent.change(screen.getAllByRole('spinbutton')[0], { target: { value: 1 } });
  fireEvent.change(screen.getAllByRole('spinbutton')[1], { target: { value: 1 } });

  expect(mockChangeSetting).toBeCalled();
});
