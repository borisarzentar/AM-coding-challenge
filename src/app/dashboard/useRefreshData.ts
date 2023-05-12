import { useEffect, useState } from 'react';

const SECONDS_TO_REFRESH = 60;

const useRefreshData = (refreshCallback: () => void) => {
  const [secondsLeftTillRefresh, setSecondsLeftTillRefresh] =
    useState(SECONDS_TO_REFRESH);

  useEffect(() => {
    let timeoutId: number;

    function countToRefresh() {
      setSecondsLeftTillRefresh((prev) =>
        prev === 0 ? SECONDS_TO_REFRESH : prev - 1
      );
    }
    timeoutId = window.setInterval(countToRefresh, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (secondsLeftTillRefresh === 0) {
      refreshCallback();
    }
  }, [refreshCallback, secondsLeftTillRefresh]);

  return {
    secondsLeftTillRefresh,
  };
};

export default useRefreshData;
