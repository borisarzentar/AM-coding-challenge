import formatOrderDate from '../../modules/orders/formatOrderDate';
import formatOrderVolume from '../../modules/orders/formatOrderVolume';
import sortOrdersByDate from '../../modules/orders/sortOrdersByDate';
import { OrderType } from '../../modules/orders/types';
import Stack from '../Stack';
import Table from '../Table';
import Text from '../Typography/Text';
import styles from './RecentOrders.module.css';

interface RecentOrdersProps {
  orders: OrderType[];
  className?: string;
  isError: boolean;
}

const RecentOrders = ({ orders, className, isError }: RecentOrdersProps) => {
  const recentOrders = sortOrdersByDate(orders, true).slice(
    0,
    5
  ) as OrderType[];

  return (
    <Stack className={className}>
      <Table className={styles.table}>
        <caption>
          <Text>{'5 recent orders'.toUpperCase()}</Text>
        </caption>
        <tbody>
          {recentOrders.length ? (
            recentOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <Text>{order.number}</Text>
                </td>
                <td>
                  <Text>{formatOrderDate(order.date)}</Text>
                </td>
                <td>
                  <Text>{order.product}</Text>
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
                  {isError ? 'Error loading orders' : 'Loading orders...'}
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Stack>
  );
};

export default RecentOrders;
