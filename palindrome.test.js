const Palindrome = require("./palindrome.js");

describe("class Palindrome", () => {
  it("returns single letter string", () => {
    const palindrome = new Palindrome("I");
    expect(palindrome.checkPalindrome()).toEqual("Yes, I is a palindrome.");
  });

  it("returns yes if string is palindrome", () => {
    const palindrome = new Palindrome("non");
    expect(palindrome.checkPalindrome()).toEqual("Yes, non is a palindrome.");
  });

  it("returns yes if string is palindrome", () => {
    const palindrome = new Palindrome("none");
    expect(palindrome.checkPalindrome()).toEqual(
      "No, none is not a palindrome."
    );
  });
});
