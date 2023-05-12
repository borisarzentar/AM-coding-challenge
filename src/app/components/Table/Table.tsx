import { ReactNode } from 'react';
import styles from './Table.module.css';
import classNames from 'classnames';

interface TableProps {
  children: ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => (
  <div className={styles.tableContainer}>
    <table className={classNames(className, styles.table)}>{children}</table>
  </div>
);

export default Table;
