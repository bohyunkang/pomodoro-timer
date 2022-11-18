import Store from './Store';

export default class TimerStore extends Store {
  constructor() {
    super();

    this.modes = [
      { mode: '작업 시간', minute: 0, second: 10 },
      { mode: '공유 시간', minute: 0, second: 10 },
      { mode: '쉬는 시간', minute: 0, second: 10 },
    ];

    this.mode = '작업 시간';
    this.order = 0;

    this.status = 'stop';

    this.minute = 0;
    this.second = 10;
  }

  tick() {
    if (this.status === 'stop') {
      this.publish();

      return;
    }

    if (this.minute === 0 && this.second === 0) {
      this.done();

      this.publish();

      return;
    }

    if (this.second === 0) {
      this.minute -= 1;
      this.second = 59;

      this.publish();

      return;
    }

    this.second -= 1;

    this.publish();
  }

  run() {
    this.status = 'run';

    this.publish();
  }

  stop() {
    this.status = 'stop';

    this.publish();
  }

  done() {
    this.status = 'done';

    this.publish();
  }

  changeMode() {
    this.stop();

    this.order += 1;
    this.order %= this.modes.length;

    const { mode, minute, second } = this.modes[this.order];

    this.mode = mode;
    this.minute = minute;
    this.second = second;

    this.publish();
  }

  reset() {
    this.status = 'stop';

    const { minute, second } = this.modes[this.order];

    this.minute = minute;
    this.second = second;

    this.publish();
  }

  changeModes(modes) {
    this.modes = modes;

    this.publish();
  }
}

export const timerStore = new TimerStore();
