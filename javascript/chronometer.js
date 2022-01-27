class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback=null) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
      console.log(this.currentTime);
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60000);
  }

  getSeconds() {

    return Math.floor(this.currentTime /100);
    // ... your code goes here
  }

  getMiliSeconds(){
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value<10) return "0"+value;
    else return value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
