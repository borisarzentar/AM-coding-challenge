import parseOrders from '../parseOrders';

describe('parseOrder function', () => {
  it('should parse raw orders in expected format', () => {
    const mockRawOrders = [
      ['1', '1', '3.1.2023', 'Test product 1', '123,00 €'],
      ['2', '2', '15.6.2022', 'Test product 2', '123.456,00 €'],
      ['3', '3', '12.12.2021', 'Test product 3', '123456,00 €'],
    ];

    const parsedOrders = parseOrders(mockRawOrders);

    expect(parsedOrders).toEqual([
      {
        id: '1',
        number: '1',
        date: new Date(2023, 0, 3),
        product: 'Test product 1',
        volume: 123,
        currency: 'EUR',
      },
      {
        id: '2',
        number: '2',
        date: new Date(2022, 5, 15),
        product: 'Test product 2',
        volume: 123456,
        currency: 'EUR',
      },
      {
        id: '3',
        number: '3',
        date: new Date(2021, 11, 12),
        product: 'Test product 3',
        volume: 123456,
        currency: 'EUR',
      },
    ]);
  });
});
