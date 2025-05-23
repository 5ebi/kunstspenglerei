'use client';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  // const pathname = usePathname();
  // const isHome = pathname === '/';
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.link} href={'/'}>
              Home
            </Link>
          </li>

          <li>
            <Link className={styles.link} href={'/geschichte'}>
              Geschichte
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/referenzen'}>
              Referenzen
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/kontakt'}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
