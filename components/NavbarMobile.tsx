import Link from 'next/link';
import styles from './navbar.module.css';

export function NavbarMobile() {
  return (
    <nav className={styles.navbarMobile}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.linkItem} href={'/'}>
            Startseite
          </Link>
        </li>
        <li>
          <Link className={styles.linkItem} href={'/geschichte'}>
            Geschichte
          </Link>
        </li>
        <li>
          <Link className={styles.linkItem} href={'/referenzen'}>
            Referenzen
          </Link>
        </li>
        <li>
          <Link className={styles.linkItem} href={'/kontakt'}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
