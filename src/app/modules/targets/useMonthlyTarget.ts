import useMonthlyTargets from './useMonthlyTargets';

const useMonthlyTarget = (selectedMonth: string) => {
  const {
    data: monthlyTargets,
    refetch: refetchMonthlyTargets,
    isError: isFetchingMonthlyTargetsError,
  } = useMonthlyTargets();

  const monthlyTarget = monthlyTargets?.[selectedMonth];

  return {
    monthlyTarget,
    refetchMonthlyTargets,
    isFetchingMonthlyTargetsError,
  };
};

export default useMonthlyTarget;
