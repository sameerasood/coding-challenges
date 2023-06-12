const RemoveDuplicates = require("./duplicateNumber.js");

describe("class DuplicateNumber", () => {
  it("returns the array unchanged", () => {
    const duplicateNumber = new RemoveDuplicates([1]);
    expect(duplicateNumber.getResult()).toEqual([1]);
  });

  it("removes duplicate from 2 elements array", () => {
    const duplicateNumber = new RemoveDuplicates([1, 1]);
    expect(duplicateNumber.getResult()).toEqual([1]);
  });
});
