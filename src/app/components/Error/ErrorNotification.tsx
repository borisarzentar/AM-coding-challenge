import { ReactNode } from 'react';
import styles from './Error.module.css';

interface ErrorNotificationProps {
  children: ReactNode;
}

const ErrorNotification = ({ children }: ErrorNotificationProps) => {
  return <div className={styles.errorNotification}>{children}</div>;
};

export default ErrorNotification;
