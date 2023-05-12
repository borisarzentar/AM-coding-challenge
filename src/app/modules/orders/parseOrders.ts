import { OrderType } from './types';

const parseOrder = ([
  id,
  orderNumber,
  orderDate,
  orderProduct,
  orderVolume,
]: Array<string>): OrderType => {
  const [day, month, year] = orderDate.split('.');
  const currencySign = orderVolume.replace(/[\d.,\s]*/g, '');

  return {
    id,
    number: orderNumber,
    date: new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    ),
    product: orderProduct,
    volume: parseFloat(orderVolume.replace(/[^0-9,-]+/g, '')),
    currency: currencySign === '€' ? 'EUR' : '',
  };
};

export default function parseOrders(rawOrders: Array<Array<string>>) {
  return rawOrders.map(parseOrder);
}
