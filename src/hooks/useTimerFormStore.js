import useStore from './useStore';

import { timerFormStore } from '../stores/TimerFormStore';

export default function useTimerFormStore() {
  return useStore(timerFormStore);
}
