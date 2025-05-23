import './globals.css';
import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import { Montserrat, Titillium_Web } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const titillium_web = Titillium_Web({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-titillium_web',
});
export const metadata: Metadata = {
  title: 'Website der Kunstspenglerei Andreas Speiser, 1190 Wien',
  description:
    'Diese Website präsentiert die Spenglerei von Andreas Speiser. Sie zeigt die Schönheit und Präzision der Spenglerkunst in Wien.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${titillium_web.variable}`}
    >
      <body>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Navbar />
          <main style={{ paddingTop: '0rem' }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
