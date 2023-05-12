import formatOrderVolume from '../../modules/orders/formatOrderVolume';
import Text from '../Typography/Text';

import styles from './TargetTracker.module.css';

interface TargetTrackerProps {
  currentValue: number;
  target: {
    value: number;
    currency: string;
  };
}

const TargetTracker = ({ currentValue, target }: TargetTrackerProps) => {
  return (
    <div className={styles.targetTracker}>
      <div
        className={styles.currentValue}
        style={{
          width: `calc(85% * ${
            currentValue && target ? currentValue / target.value : 0
          })`,
        }}
      />
      <Text className={styles.targetValue}>
        {formatOrderVolume(target?.value || 123456, {
          maximumFractionDigits: 0,
        })}
      </Text>
    </div>
  );
};

export default TargetTracker;
