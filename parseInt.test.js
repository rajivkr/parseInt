const { default: memoizedParseInt } = require('./parseInt');

describe('check if number is parsed correctly', () => {
  it('return parsed integer', () => {
    expect(memoizedParseInt('-1')).toBe(-1);
  });

  it('return parsed integer', () => {
    expect(memoizedParseInt('123')).toBe(123);
  });
});
