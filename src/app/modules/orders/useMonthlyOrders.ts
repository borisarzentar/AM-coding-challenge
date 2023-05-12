import { useCallback, useMemo, useState } from 'react';
import useOrders from './useOrders';
import { OrderType } from './types';

const useMonthlyOrders = () => {
  const {
    data: orders,
    refetch: refetchOrders,
    isRefetching: isRefetchingOrders,
    isError: isFetchingOrdersError,
  } = useOrders();

  const allOrders = useMemo(() => {
    if (!orders) {
      return {};
    }

    return orders.reduce((months: { [key: string]: OrderType[] }, order) => {
      const monthYearFormat = `${order.date.toLocaleString('default', {
        month: 'long',
      })} ${order.date.getFullYear()}`;

      if (!months[monthYearFormat]) {
        months[monthYearFormat] = [];
      }
      months[monthYearFormat].push(order);

      return months;
    }, {});
  }, [orders]);

  const months = Object.keys(allOrders);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const selectedPeriod = months[selectedMonthIndex];
  const monthlyOrders = allOrders[selectedPeriod] || [];

  const selectNextMonth = useCallback(() => {
    setSelectedMonthIndex(
      selectedMonthIndex + 1 < months.length - 1
        ? selectedMonthIndex + 1
        : months.length - 1
    );
  }, [months, selectedMonthIndex]);

  const selectPreviousMonth = useCallback(() => {
    setSelectedMonthIndex(
      selectedMonthIndex - 1 > 0 ? selectedMonthIndex - 1 : 0
    );
  }, [selectedMonthIndex]);

  const [selectedMonth, selectedYear] = selectedPeriod
    ? selectedPeriod.split(' ')
    : [];

  return {
    monthlyOrders,
    selectedMonth,
    selectedYear,
    selectNextMonth,
    selectPreviousMonth,
    refetchOrders,
    isRefetchingOrders,
    isFetchingOrdersError,
  };
};

export default useMonthlyOrders;
