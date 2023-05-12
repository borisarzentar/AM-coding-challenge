import formatOrderVolume from '../formatOrderVolume';

describe('formatOrderVolume function', () => {
  it('should format order volume in expected format', () => {
    expect(formatOrderVolume(123)).toBe('123,00 €');
    expect(formatOrderVolume(123456)).toBe('123.456,00 €');
  });
});
