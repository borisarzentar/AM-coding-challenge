import { UseQueryResult, useQuery } from '@tanstack/react-query';
import getData from './getData';
import { OrderType } from './types';

const useOrders = (): UseQueryResult<OrderType[]> => {
  return useQuery(['orders'], () => getData(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export default useOrders;
