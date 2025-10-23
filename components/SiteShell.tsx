'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

type SiteShellProps = {
  children: ReactNode;
};

const TESTDESIGN_ROUTE_PREFIX = '/testdesign';

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  const navbarVariant =
    pathname.startsWith(TESTDESIGN_ROUTE_PREFIX) ? 'black' : 'default';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Navbar variant={navbarVariant} />
      <main style={{ paddingTop: '0rem' }}>{children}</main>
    </div>
  );
}
