const PrimeNumber = require("./primeNumber.js");

describe("PrimeNumber class", () => {
  it("checks if 2 is a prime number", () => {
    const primeNumber = new PrimeNumber(2);
    expect(primeNumber.getResult()).toEqual("2 is a prime number.");
  });
});
