'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={'/home'}>Home</Link>
          </li>
          <li>
            <Link href={'/kontakt'}>Kontakt</Link>
          </li>
          <li>
            <Link href={'/geschichte'}>Geschichte</Link>
          </li>
          <li>
            <Link href={'/referenzen'}>Referenzen</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
