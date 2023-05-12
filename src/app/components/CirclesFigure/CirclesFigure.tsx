import classNames from 'classnames';
import styles from './CirclesFigure.module.css';

const CirclesFigure = () => (
  <div className={styles.circlesFigure}>
    <div className={classNames(styles.circle, styles.circle1)}></div>
    <div className={classNames(styles.circle, styles.circle2)}></div>
    <div className={classNames(styles.circle, styles.circle3)}></div>
  </div>
);

export default CirclesFigure;
