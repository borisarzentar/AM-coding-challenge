import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './text.module.css';

interface TextProps {
  children: ReactNode;
  bold?: boolean;
  className?: string;
  size?: '1' | '2' | '3' | '4';
  align?: 'center' | 'right';
  style?: { [key: string]: string };
}

const Text = ({
  children,
  className,
  bold = false,
  size,
  align,
  style,
}: TextProps) => (
  <span
    className={classNames(className, styles.text, {
      [styles.bold]: bold,
      [styles[`size-${size}`]]: size,
      [styles.textCentered]: align === 'center',
      [styles.textRightAligned]: align === 'right',
    })}
    style={style}
  >
    {children}
  </span>
);

export default Text;
