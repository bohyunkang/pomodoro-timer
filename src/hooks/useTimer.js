import { useEffect, useState } from 'react';
import useInterval from './useInterval';
import useSound from './useSound';
import useTimerStore from './useTimerStore';

export default function useTimer() {
  const [isRunning, setIsRunning] = useState(false);

  const timerStore = useTimerStore();
  const {
    modes, mode, status, minute, second,
  } = timerStore;

  const sound = useSound();

  useEffect(() => {
    if (status === 'run') {
      setIsRunning(true);
      sound.pause();
    }

    if (status === 'stop') {
      setIsRunning(false);
      sound.pause();
    }

    if (status === 'done') {
      setIsRunning(false);
      sound.play();
    }
  }, [status]);

  useInterval(() => {
    timerStore.tick();
  }, isRunning ? 1000 : null);

  const changeMode = () => {
    timerStore.changeMode();
  };

  const operate = () => {
    if (status === 'run') {
      timerStore.stop();
      return;
    }

    if (status === 'done') {
      timerStore.stop();
      timerStore.changeMode();
    }

    timerStore.run();
  };

  const reset = () => {
    timerStore.reset();
  };

  return ({
    modes,
    mode,
    status,
    minute,
    second,
    changeMode,
    operate,
    reset,
  });
}
