const sortOrdersByVolume = (
  orders: { volume: number }[],
  isDescending = false
) =>
  orders.sort((order1, order2) => {
    if (order1.volume === order2.volume) {
      return 0;
    }

    if (isDescending) {
      return order1.volume < order2.volume ? 1 : -1;
    }

    return order1.volume > order2.volume ? 1 : -1;
  });

export default sortOrdersByVolume;
