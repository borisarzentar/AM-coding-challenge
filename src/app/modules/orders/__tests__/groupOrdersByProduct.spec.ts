import groupOrdersByProduct from '../groupOrdersByProduct';

describe('groupOrdersByProduct function', () => {
  it('should format order date in expected format', () => {
    const mockRawOrders = [
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
        product: 'Test product 1',
        volume: 123456,
        currency: 'EUR',
      },
      {
        id: '3',
        number: '3',
        date: new Date(2021, 11, 12),
        product: 'Test product 2',
        volume: 12345,
        currency: 'EUR',
      },
      {
        id: '4',
        number: '4',
        date: new Date(2021, 11, 12),
        product: 'Test product 2',
        volume: 654,
        currency: 'EUR',
      },
      {
        id: '5',
        number: '5',
        date: new Date(2021, 11, 12),
        product: 'Test product 3',
        volume: 987,
        currency: 'EUR',
      },
    ];

    expect(groupOrdersByProduct(mockRawOrders)).toEqual([
      {
        product: 'Test product 1',
        volume: 123456 + 123,
      },
      {
        product: 'Test product 2',
        volume: 12345 + 654,
      },
      {
        product: 'Test product 3',
        volume: 987,
      },
    ]);
  });
});
