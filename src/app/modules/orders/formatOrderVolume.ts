export default function formatOrderVolume(
  volume: number,
  { currency = 'EUR', maximumFractionDigits = 2, ...restConfig } = {}
): string {
  return volume.toLocaleString('de', {
    style: 'currency',
    currency,
    ...restConfig,
  });
}
