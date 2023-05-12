import groupOrdersByProduct from '../../modules/orders/groupOrdersByProduct';
import sortOrdersByVolume from '../../modules/orders/sortOrdersByVolume';
import { OrderType } from '../../modules/orders/types';
import Stack from '../Stack';
import Text from '../Typography/Text';
import Table from '../Table';
import formatOrderVolume from '../../modules/orders/formatOrderVolume';
import styles from './TopProducts.module.css';

interface TopProductsProps {
  orders: OrderType[];
  className?: string;
  isError: boolean;
}

const TopProducts = ({ orders, className, isError }: TopProductsProps) => {
  const topProducts = sortOrdersByVolume(
    groupOrdersByProduct(orders),
    true
  ).slice(0, 5) as OrderType[];

  const volumeSum = topProducts.reduce(
    (sum, order) => (sum += order.volume),
    0
  );

  return (
    <Stack className={className}>
      <Table className={styles.table}>
        <caption>
          <Text>{'Top 5 products'.toUpperCase()}</Text>
        </caption>
        <tbody>
          {topProducts.length ? (
            topProducts.map((order) => (
              <tr key={order.product}>
                <td>
                  <Text>{order.product}</Text>
                </td>
                <td>
                  <div
                    className={styles.volumeIndicator}
                    style={{
                      width: `calc(100% * ${order.volume / volumeSum})`,
                    }}
                  />
                </td>
                <td>
                  <Text bold>{formatOrderVolume(order.volume)}</Text>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Text>
                  {isError ? 'Error loading products' : 'Loading products...'}
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Stack>
  );
};

export default TopProducts;
