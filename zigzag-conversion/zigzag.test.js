const zConvert = require('./index');

test(
  "string 'PAYPALISHIRING' with 4 columns should be converted to 'PINALSIGYAHRPI'",
  () => {
    expect(zConvert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  }
);

test("string 'PAYPALISHIRING' with 3 columns should be converted to 'PAHNAPLSIIGYIR'", () => {
  expect(zConvert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test("string 'EMTEHANI' with 3 columns should be converted to 'EHMEAITN'", () => {
  expect(zConvert("EMTEHANI", 3)).toBe("EHMEAITN");
});