import Store from './Store';

export default class TimerFormStore extends Store {
  constructor() {
    super();

    this.modes = {
      work: { mode: '작업 시간', minute: 0, second: 10 },
      share: { mode: '공유 시간', minute: 0, second: 10 },
      rest: { mode: '쉬는 시간', minute: 0, second: 10 },
    };
  }

  changeSetting({ name, minute, second }) {
    this.modes[name] = {
      ...this.modes[name],
      minute,
      second,
    };

    this.publish();
  }
}

export const timerFormStore = new TimerFormStore();
