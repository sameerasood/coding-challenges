class RemoveDuplicates {
  constructor(arr) {
    this.arr = arr;
    this.newArr = [];
  }

  getResult() {
    for (let i = 0; i < this.arr.length; i++) {
      const currentValue = this.arr[i];
      if (!this.newArr.includes(currentValue)) {
        this.newArr.push(currentValue);
      }
    }
    return this.newArr;
  }
}

module.exports = RemoveDuplicates;
