const ReverseString = require("./reverseString.js");

describe("class ReverString", () => {
  it("returns the single alphabet string", () => {
    const reverseString = new ReverseString("a");
    expect(reverseString.getResult()).toEqual("a");
  });

  it("returns reversed string for two alphabet string", () => {
    const reverseString = new ReverseString("an");
    expect(reverseString.getResult()).toEqual("na");
  });

  it("returns reversed string for a longer string", () => {
    const reverseString = new ReverseString("interview");
    expect(reverseString.getResult()).toEqual("weivretni");
  });
});
