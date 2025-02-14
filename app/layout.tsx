import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './Navbar';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          {/* <Navbar /> */}
          <main style={{ paddingTop: '0rem' }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
