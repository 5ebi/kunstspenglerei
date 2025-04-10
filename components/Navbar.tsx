'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <div>
      <nav
        style={{
          position: 'fixed',
          top: 20,

          zIndex: 10,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.032)',
          color: 'white',
          height: '2rem',
          borderRadius: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            flexDirection: 'row',
            gap: '2rem',
            justifyContent: 'center',
            fontSize: '1.2rem',
            alignItems: 'center',
            height: '100%',
          }}
        >
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
