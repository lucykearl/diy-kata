const { TestScheduler } = require("jest");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("when the boolean True to Yes and False to No", () => {
    expect(booleanToWord(true)).toBe('yes');
    expect(booleanToWord(false)).toBe('no');
  });

});