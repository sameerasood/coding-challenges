const ReverseString = require("./reverseString.js");

describe("class ReverString", () => {
  it("returns the single alphabet string", () => {
    const reverseString = new ReverseString("a");
    expect(reverseString.getResult()).toEqual("a");
  });
});
