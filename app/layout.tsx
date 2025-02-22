import './globals.css';
import type { Metadata } from 'next';

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
