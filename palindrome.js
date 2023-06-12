class Palindrome {
  constructor(str) {
    this.str = str;
  }

  checkPalindrome() {
    for (let i = 0; i < this.str.length / 2; i++) {
      if (this.str[i] != this.str[this.str.length - 1 - i]) {
        return `No, ${this.str} is not a palindrome.`;
      }
    }
    return `Yes, ${this.str} is a palindrome.`;
  }
}

module.exports = Palindrome;
