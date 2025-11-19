import Link from 'next/link';
import styles from './footer.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerList}>
        <li>footer1</li>
        <li>footer2</li>
      </ul>
    </div>
  );
}
