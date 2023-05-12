'use client';

import { useCallback } from 'react';
import Stack from '../components/Stack';
import Text from '../components/Typography/Text';
import MonthSwitch from '../components/MonthSwitch';
import CirclesFigure from '../components/CirclesFigure/CirclesFigure';
import TargetTracker from '../components/TargetTracker';
import RecentOrders from '../components/RecentOrders';
import TopProducts from '../components/TopProducts';
import formatOrderVolume from '../modules/orders/formatOrderVolume';

import styles from './Dashboard.module.css';
import useMonthlyOrders from '../modules/orders/useMonthlyOrders';
import useRefreshData from './useRefreshData';
import ErrorContainer from '../components/Error/ErrorContainer';
import ErrorNotification from '../components/Error/ErrorNotification';
import useMonthlyTarget from '../modules/targets/useMonthlyTarget';

const DashboardPage = () => {
  const {
    monthlyOrders,
    selectedMonth,
    selectedYear,
    selectNextMonth,
    selectPreviousMonth,
    refetchOrders,
    isRefetchingOrders,
    isFetchingOrdersError,
  } = useMonthlyOrders();

  const monthlyOrdersSum = monthlyOrders.reduce(
    (sum, order) => sum + order.volume,
    0
  );

  const {
    monthlyTarget,
    refetchMonthlyTargets,
    isFetchingMonthlyTargetsError,
  } = useMonthlyTarget(selectedMonth || 'January');

  const refreshData = useCallback(() => {
    refetchOrders();
    refetchMonthlyTargets();
  }, [refetchMonthlyTargets, refetchOrders]);

  const { secondsLeftTillRefresh } = useRefreshData(refreshData);

  const monthSwitchValue =
    selectedMonth && selectedYear
      ? `${selectedMonth} ${selectedYear}`
      : isFetchingOrdersError
      ? 'Error loading data'
      : 'Loading data...';

  return (
    <div className={styles.pageContainer}>
      <CirclesFigure />

      <div className={styles.contentContainer}>
        <div className={styles.infographics}>
          <Stack>
            <Stack orientation="horizontal" gap="between">
              <Text>Order Dashboard</Text>
              {isRefetchingOrders ? (
                <Text>Refreshing...</Text>
              ) : (
                <Text>
                  Refresh in <Text bold>{secondsLeftTillRefresh}</Text>
                </Text>
              )}
            </Stack>

            <Stack orientation="horizontal" gap="between">
              <MonthSwitch
                value={monthSwitchValue}
                onPreviousClick={selectPreviousMonth}
                onNextClick={selectNextMonth}
              />

              <ErrorContainer>
                {isFetchingOrdersError && (
                  <ErrorNotification>
                    <Text>Error fetching orders!</Text>
                  </ErrorNotification>
                )}
                {isFetchingMonthlyTargetsError && (
                  <ErrorNotification>
                    <Text>Error fetching targets!</Text>
                  </ErrorNotification>
                )}
              </ErrorContainer>
            </Stack>

            <Text size="4" className={styles.volumeSum}>
              {formatOrderVolume(monthlyOrdersSum)}
            </Text>
          </Stack>

          <TargetTracker
            currentValue={monthlyOrdersSum}
            target={monthlyTarget}
          />
        </div>

        <Stack orientation="horizontal" gap="17">
          <RecentOrders
            className={styles.recentOrders}
            orders={monthlyOrders}
            isError={isFetchingOrdersError}
          />
          <TopProducts
            orders={monthlyOrders}
            className={styles.topProducts}
            isError={isFetchingOrdersError}
          />
        </Stack>
      </div>
    </div>
  );
};

export default DashboardPage;
