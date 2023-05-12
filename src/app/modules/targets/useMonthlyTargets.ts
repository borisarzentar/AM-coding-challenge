import { useQuery } from '@tanstack/react-query';
import getData from './getData';

const useMonthlyTargets = () => {
  return useQuery(['targets'], () => getData(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export default useMonthlyTargets;
