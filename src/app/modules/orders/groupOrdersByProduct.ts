export default function groupOrdersByProduct(
  orders: { product: string; volume: number }[]
) {
  const groupedOrders = orders.reduce(
    (acc: { [key: string]: number }, order) => {
      const product = order.product;

      if (!acc[product]) {
        acc[product] = 0;
      }

      acc[product] += order.volume;

      return acc;
    },
    {}
  );

  return Object.keys(groupedOrders).map((product) => ({
    product,
    volume: groupedOrders[product],
  }));
}
