const sortOrdersByDate = (orders: { date: Date }[], isDescending = false) =>
  orders.sort((order1, order2) => {
    if (order1.date.getTime() === order2.date.getTime()) {
      return 0;
    }

    if (isDescending) {
      return order1.date < order2.date ? 1 : -1;
    }

    return order1.date > order2.date ? 1 : -1;
  });

export default sortOrdersByDate;
