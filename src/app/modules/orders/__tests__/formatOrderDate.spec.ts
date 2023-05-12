import formatOrderDate from '../formatOrderDate';

describe('formatOrderDate function', () => {
  it('should format order date in expected format', () => {
    expect(formatOrderDate(new Date(2023, 0, 1))).toBe('1.1.2023');
    expect(formatOrderDate(new Date(2021, 5, 6))).toBe('6.6.2021');
  });
});
