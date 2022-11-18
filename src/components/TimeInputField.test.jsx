import { fireEvent, render, screen } from '@testing-library/react';
import TimeInputField from './TimeInputField';

const handleChange = jest.fn();

test('minute 수정이 잘되나 확인하자', () => {
  render(<TimeInputField
    title="작업 시간"
    name="work"
    minute={0}
    second={0}
    onChange={handleChange}
  />);

  fireEvent.change(screen.getByLabelText('분'), { target: { value: 1 } });

  expect(handleChange).toBeCalled();
});

test('minute 인풋값 유효성 검사!', () => {
  render(<TimeInputField
    title="작업 시간"
    name="work"
    minute={0}
    second={0}
    onChange={handleChange}
  />);

  fireEvent.change(screen.getByLabelText('분'), { target: { value: 1444 } });

  expect(handleChange).toBeCalled();
  expect(screen.queryByDisplayValue('1444')).toBeNull();
});

test('second 수정이 잘되나 확인하자', () => {
  render(<TimeInputField
    title="작업 시간"
    name="work"
    minute={0}
    second={0}
    onChange={handleChange}
  />);

  fireEvent.change(screen.getByLabelText('초'), { target: { value: 1 } });

  expect(handleChange).toBeCalled();
});

test('second 인풋값 유효성 검사!', () => {
  render(<TimeInputField
    title="작업 시간"
    name="work"
    minute={0}
    second={0}
    onChange={handleChange}
  />);

  fireEvent.change(screen.getByLabelText('초'), { target: { value: 60 } });

  expect(handleChange).toBeCalled();
  expect(screen.queryByDisplayValue('60')).toBeNull();
});
