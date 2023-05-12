import classNames from 'classnames';
import styles from './Stack.module.css';
import { ReactNode, CSSProperties } from 'react';

interface StackProps {
  className?: string;
  children: ReactNode | Array<ReactNode>;
  orientation?: 'horizontal' | 'vertical';
  gap?: string;
  align?: string;
  wrap?: boolean;
}

const Stack = ({
  className,
  children,
  gap = '0',
  align = '/',
  orientation = 'vertical',
  wrap = false,
  ...rest
}: StackProps) => {
  const alignValues = align.split('/');

  return (
    <div
      className={classNames(className, styles.stack, {
        [styles[`align-${orientation}-main-${alignValues[0]}`]]: alignValues[0],
        [styles[`align-${orientation}-second-${alignValues[1]}`]]:
          alignValues[1],
        [styles['gap']]: gap !== 'between',
        [styles['gap-between']]: gap === 'between',
        [styles.wrap]: wrap,
      })}
      style={
        {
          '--stack-gap': gap,
          '--stack-direction': orientation === 'horizontal' ? 'row' : 'column',
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default Stack;
