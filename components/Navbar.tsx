'use client';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

type NavbarProps = {
  variant?: 'default' | 'black';
};

export function Navbar({ variant = 'default' }: NavbarProps) {
  const navClassName =
    variant === 'black'
      ? `${styles.navbar} ${styles.navbarBlack}`
      : styles.navbar;

  return (
    <div>
      <nav className={navClassName}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.link} href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/testdesign'}>
              TEST
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
