'use client';
import styles from '@/(mainLayout)/page.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  function handleScroll() {
    setClientWindowHeight(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColor = clientWindowHeight > 100 ? 'yellow' : 'transparent';

  return (
    <div style={{ position: 'sticky', top: 0, background: backgroundColor }}>
      <div className={styles.header}>
        <Link href='/'>Logo & TenderTask </Link>
        <nav className={styles.navbar}>
          <Link href='/monitor'>Abonner på udbud</Link>
          <Link href='/tender'>Opret udbud</Link>
          <Link href='/'>Services</Link>
          <Link href='/'>Om os</Link>
        </nav>
      </div>
    </div>
  );
}
