import styles from '@/page.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>Placeholder Logo & Name </Link>
      <nav className={styles.navbar}>
        <Link href='/monitor'>Monitor</Link>
        <Link href='/tender'>Tender</Link>
        <Link href='/'>Services</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </nav>
    </div>
  );
}
