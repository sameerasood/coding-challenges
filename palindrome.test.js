const Palindrome = require("./palindrome.js");

describe("class Palindrome", () => {
  it("returns single letter string", () => {
    const palindrome = new Palindrome("I");
    expect(palindrome.checkPalindrome()).toEqual("Yes, it is a palindrome.");
  });
});
