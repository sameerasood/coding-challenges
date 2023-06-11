class ReverseString {
  constructor(str) {
    if (str.length === 0) {
      throw new Error("Enter a valid string.");
    }
    this.str = str;
    this.newString = [];
  }

  getResult() {
    this.str = this.str.split("");
    for (let i = 0; i < this.str.length; i++) {
      this.newString.unshift(this.str[i]);
    }
    return this.newString.join("");
  }
}

module.exports = ReverseString;

console.log(new ReverseString("cool").getResult());
