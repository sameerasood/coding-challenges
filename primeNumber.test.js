const PrimeNumber = require("./primeNumber.js");

describe("PrimeNumber class", () => {
  it("checks if 2 is a prime number", () => {
    const primeNumber = new PrimeNumber(2);
    expect(primeNumber.getResult()).toEqual("2 is a prime number.");
  });

  it("checks if 4 is a prime", () => {
    const primeNumber = new PrimeNumber(4);
    expect(primeNumber.getResult()).toEqual("4 is not a prime number.");
  });

  it("checks if a big number is a prime", () => {
    const primeNumber = new PrimeNumber(187);
    expect(primeNumber.getResult()).toEqual("187 is not a prime number.");
  });
});
