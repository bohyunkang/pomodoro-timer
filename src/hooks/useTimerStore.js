import useStore from './useStore';

import { timerStore } from '../stores/TimerStore';

export default function useTimerStore() {
  return useStore(timerStore);
}
