import { ReactNode } from 'react';
import styles from './Error.module.css';

interface ErrorContainerProps {
  children: ReactNode;
}

const ErrorContainer = ({ children }: ErrorContainerProps) => {
  return <div className={styles.errorContainer}>{children}</div>;
};

export default ErrorContainer;
