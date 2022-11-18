import { useState } from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';
import TimerSetting from './components/TimerSetting';
import FetchQuote from './components/FetchQuote';
import TodayQuote from './components/TodayQuote';

export default function App() {
  const [display, setDisplay] = useState('TIMER');

  const handleClickSetting = () => {
    setDisplay('SETTING_TIME');
  };

  const handleClickAddMode = () => {
    setDisplay('TODAY_QUOTE');
  };

  const handleClickTimer = () => {
    setDisplay('TIMER');
  };

  return (
    <Container>
      <Wrapper display={display}>
        <FetchQuote />
        {display === 'TIMER' && (
          <>
            <Title>뽀모도로 타이머</Title>
            <Timer />
            <ButtonWrapper>
              <Button
                type="button"
                onClick={handleClickAddMode}
                color="red"
              >
                오늘의 명언
              </Button>
              <Button
                type="button"
                onClick={handleClickSetting}
                color="blue"
              >
                시간 세팅
              </Button>
            </ButtonWrapper>
          </>
        )}
        {display === 'SETTING_TIME' && (
          <TimerSetting close={handleClickTimer} />
        )}
        {display === 'TODAY_QUOTE' && (
          <TodayQuote close={handleClickTimer} />
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1400px;
  min-width: 1024px;
  height: 100vh;
  margin: 0px auto;
`;

const Wrapper = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: ${({ display }) => (display === 'TIMER' ? '7em 5em 5em 5em' : '3em')};
  width: 45%;
  min-height: 50%;
  border-radius: 3em;
  background: #E3E6EB;
  box-shadow:  20px 20px 60px #c1c4c8, -20px -20px 60px #ffffff;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 2.5em;
  right: 3em;
`;

const Button = styled.button`
  padding: 1em 1.5em;
  border-radius: 1em;
  background: linear-gradient(145deg, #cccfd4, #f3f6fb);
  box-shadow: 6px 6px 11px #c1c4c8, -6px -6px 11px #ffffff;
  
  color: ${({ color }) => (color === 'blue' ? '#5081CB' : '#AC445B')};
  font-weight: 600;

  & + & {
    margin-left: 1em;
  }
`;
