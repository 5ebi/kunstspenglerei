'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div style={{ fontSize: '2rem' }}>
        <Link href="/">Kunstspenglerei Andreas Speiser</Link>
      </div>
      <ul>
        <li>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/referenzen"
            className={pathname === '/referenzen' ? styles.active : ''}
          >
            Referenzen
          </Link>
        </li>
        <li>
          <Link
            href="/handwerk"
            className={pathname === '/handwerk' ? styles.active : ''}
          >
            Handwerk
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className={pathname === '/kontakt' ? styles.active : ''}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
