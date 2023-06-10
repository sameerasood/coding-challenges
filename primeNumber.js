class PrimeNumber {
  constructor(num) {
    if (num <= 1) {
      throw new Error("Number should be greater than 1");
    }
    this.num = num;
  }

  getResult() {
    for (let i = 2; i <= Math.sqrt(this.num); i++) {
      if (this.num % i == 0) {
        return `${this.num} is not a prime number.`;
      }
    }

    return `${this.num} is a prime number.`;
  }
}

module.exports = PrimeNumber;
