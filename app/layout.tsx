import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import { ReactNode } from 'react';
import { NavbarDesktop } from '@/components/NavbarDesktop';
import { NavbarMobile } from '@/components/NavbarMobile';
import { Footer } from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-1',
});

const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-2',
});

export const metadata: Metadata = {
  title: 'Kunstspenglerei Andreas Speiser',
  description:
    'Diese Website präsentiert die Kunstspenglerei geleitet von Andreas Speiser in der dritten Generation. Sie zeigt die Schönheit und Präzision der Spenglerkunst eines traditionellen Familienunternehmens in 1190 Wien.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${spacegrotesk.variable} `}
    >
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <NavbarDesktop />
        {/* <NavbarMobile /> */}
        <main className="containerMain">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
