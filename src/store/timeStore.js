import { makeAutoObservable } from 'mobx';

class Timer {
  constructor() {
    makeAutoObservable(this);
  }

  secondsPassed = 0;

  increase() {
    this.secondsPassed += 1;
  }

  decrease() {
    this.secondsPassed -= 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();
export default myTimer;
