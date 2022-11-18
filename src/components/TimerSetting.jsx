import styled from 'styled-components';
import useTimerFormStore from '../hooks/useTimerFormStore';
import useTimerStore from '../hooks/useTimerStore';
import TimeInputField from './TimeInputField';

export default function TimerSetting({ close }) {
  const timerFormStore = useTimerFormStore();
  const timerStore = useTimerStore();

  const { modes } = timerFormStore;

  const handleClickSetting = () => {
    close();

    const changedTimes = [
      modes.work,
      modes.share,
      modes.rest,
    ];

    timerStore.changeModes(changedTimes);
  };

  const handleChange = ({ name, minute, second }) => {
    timerFormStore.changeSetting({
      name, minute, second,
    });
  };

  return (
    <Wrapper>
      <Title>시간 세팅</Title>
      <TimeInputField
        title="작업 시간"
        name="work"
        minute={modes.work.minute}
        second={modes.work.second}
        onChange={handleChange}
      />
      <TimeInputField
        title="공유 시간"
        name="share"
        minute={modes.share.minute}
        second={modes.share.second}
        onChange={handleChange}
      />
      <TimeInputField
        title="쉬는 시간"
        name="rest"
        minute={modes.rest.minute}
        second={modes.rest.second}
        onChange={handleChange}
      />
      <Button
        type="button"
        onClick={handleClickSetting}
      >
        완료
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Button = styled.button`
  padding: 1em 3em;
  border-radius: 1em;
  background: linear-gradient(145deg, #cccfd4, #f3f6fb);
  box-shadow: 6px 6px 11px #c1c4c8, -6px -6px 11px #ffffff;
  
  color: #5081CB;
  font-weight: 600;
  margin-top: 2em;
`;
