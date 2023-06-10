const FibonacciSequence = require("./fibonacciSequence.js");

describe("Fibonnaci Sequence class", () => {
  it("returns an array for input 2", () => {
    const fibonacciSequence = new FibonacciSequence(2);
    expect(fibonacciSequence.getResult()).toEqual([0, 1]);
  });
});
