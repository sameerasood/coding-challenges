const DuplicateNumber = require("./duplicateNumber.js");

describe("class DuplicateNumber", () => {
  it("returns the array unchanged", () => {
    const duplicateNumber = new DuplicateNumber([1]);
    expect(duplicateNumber.getResult()).toEqual([1]);
  });
});
