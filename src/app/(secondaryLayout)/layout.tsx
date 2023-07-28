import Header from '@/components/header';
import styles from './monitor/page.module.css';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TenderTask',
  description: 'tasks in tender',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className={styles.main}>
          <Header />
          {children}
          {/* Not created yet */}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
