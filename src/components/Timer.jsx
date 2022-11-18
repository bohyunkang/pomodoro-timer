import { useEffect } from 'react';
import styled from 'styled-components';
import useTimer from '../hooks/useTimer';
import { timeFormat } from '../utils/functions';

const buttonTitle = {
  stop: '시작하기',
  run: '일시정지',
  done: '체크하기',
};

export default function Timer() {
  const timer = useTimer();

  const {
    modes, mode, status, minute, second,
  } = timer;

  useEffect(() => {
    timer.reset();
  }, [modes]);

  const handleClickChangeMode = () => {
    timer.changeMode();
  };

  const handleClickStart = () => {
    timer.operate();
  };

  const handleClickReset = () => {
    timer.reset();
  };

  return (
    <Container>
      <Title>
        지금은
        {' '}
        <Button
          type="button"
          onClick={handleClickChangeMode}
        >
          {mode}
        </Button>
      </Title>
      <Time>
        {timeFormat(minute)}
        {' '}
        :
        {' '}
        {timeFormat(second)}
      </Time>
      <Button
        type="button"
        onClick={handleClickStart}
      >
        {buttonTitle[status]}
      </Button>
      <Button
        type="button"
        onClick={handleClickReset}
      >
        리셋 하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 1em 0;

  font-size: 1em;
`;

const Button = styled.button`
  padding: 1em 2em;
  border-radius: 1em;
  background: linear-gradient(145deg, #cccfd4, #f3f6fb);
  box-shadow: 6px 6px 11px #c1c4c8, -6px -6px 11px #ffffff;
  
  color: #5081CB;
  font-weight: 600;

  & + & {
    margin-left: 1.5em;
  }
`;

const Time = styled.p`
  width: 50%;
  padding: 0.8em;
  margin: 1.5em auto;
  border-radius: 1em;
  background: #E3E6EB;
  box-shadow: inset 6px 6px 11px #c1c4c8, inset -6px -6px 11px #ffffff;

  font-size: 1.5em;
  font-weight: 600;
`;
