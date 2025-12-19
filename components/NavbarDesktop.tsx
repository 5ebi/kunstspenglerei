import Link from 'next/link';
import styles from './navbar.module.css';

export function NavbarDesktop() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logo1}>Kunstspenglerei</div>
        <div className={styles.logo2}>Andreas Speiser</div>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.linkItem} href={'/'}>
            Startseite!
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
      </ul>
      <div className={styles.kontakt}>
        <Link className={styles.linkItemKontakt} href={'/kontakt'}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
