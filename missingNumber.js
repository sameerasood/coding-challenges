class MissingNumber {
  constructor(array) {
    this.array = array;
    this.sum = 0;
    this.arrayTotal = 0;
    this.number = 0;
  }

  getResult() {
    let n = this.array.length + 1;
    this.sum = (n * (n + 1)) / 2;

    for (let i = 0; i < this.array.length; i++) {
      this.arrayTotal += this.array[i];
    }
    // console.log(this.arrayTotal);

    this.number = this.sum - this.arrayTotal;
    return this.number;
  }
}

module.exports = MissingNumber;
