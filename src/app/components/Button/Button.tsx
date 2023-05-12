import { ReactNode, SyntheticEvent } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps {
  isDisabled?: boolean;
  children?: ReactNode;
  className?: string;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const Button = ({
  isDisabled = false,
  children,
  className,
  onClick,
}: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button
    onClick={onClick}
    disabled={isDisabled}
    className={classNames(className, styles.button)}
  >
    {children}
  </button>
);

export default Button;
