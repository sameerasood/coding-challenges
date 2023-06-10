class MissingNumber {
  constructor(array) {
    if (array.length === 0) {
      throw new Error("Invalid input. Array is empty.");
    }

    this.array = array;
    this.sum = 0;
    this.arrayTotal = 0;
    this.number = 0;
  }

  getResult() {
    let n = this.array.length + 1;
    this.sum = (n * (n + 1)) / 2;

    for (let i = 0; i < this.array.length; i++) {
      if (typeof this.array[i] == "number") {
        this.arrayTotal += this.array[i];
      } else throw new Error("Invalid input. Array can contain only integers.");
    }
    // console.log(this.arrayTotal);

    this.number = this.sum - this.arrayTotal;
    return this.number;
  }
}

module.exports = MissingNumber;
