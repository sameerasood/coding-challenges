const MissingNumber = require("./missingNumber.js");

describe("class MissingNumber", () => {
  it("returns 1 for an array with a single 2 entry", () => {
    const missingNumber = new MissingNumber([2]);
    expect(missingNumber.getResult()).toEqual(1);
  });

  it("returns the missing number between 1 and 3", () => {
    const missingNumber = new MissingNumber([1, 3]);
    expect(missingNumber.getResult()).toEqual(2);
  });

  it("returns missing number from an array of length 10", () => {
    const missingNumber = new MissingNumber([1, 2, 4, 5, 3, 7, 8, 6]);
    expect(missingNumber.getResult()).toEqual(9);
  });

  it("throws error if array is empty", () => {
    expect(() => new MissingNumber([])).toThrowError(
      "Invalid input. Array is empty."
    );
  });
});
