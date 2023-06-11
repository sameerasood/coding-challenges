class ReverseString {
  constructor(str) {
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
