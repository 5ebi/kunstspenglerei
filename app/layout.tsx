import './globals.css';
import { SiteShell } from '@/components/SiteShell';
import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk, Titillium_Web } from 'next/font/google';
import React, { ReactNode } from 'react';

const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spacegrotesk',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const titillium = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-titillium',
});

export const metadata: Metadata = {
  title: 'Website der Kunstspenglerei Andreas Speiser, 1190 Wien',
  description:
    'Diese Website präsentiert die Spenglerei geleitet von Andreas Speiser in der dritten Generation. Sie zeigt die Schönheit und Präzision der Spenglerkunst eines traditionellen Familienunternehmens in Wien.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${titillium.variable}  ${spacegrotesk.variable} `}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
