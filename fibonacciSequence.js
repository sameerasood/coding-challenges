class FibonacciSequence {
  constructor(num) {
    this.num = num;
    this.fibSeries = [0, 1];
  }

  getResult() {
    for (let i = 2; i < this.num; i++) {
      nextNum = this.fibSeries[i - 1] + this.fibSeries[i - 2];
      this.fibSeries.push(nextNum);
    }
    return this.fibSeries;
  }
}

module.exports = FibonacciSequence;
