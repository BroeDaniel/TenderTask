'use client';
import styles from '@/(mainLayout)//page.module.css';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className={styles.frontpage}>
      <h1>Matcher virksomheder med udbud i den private sektor</h1>
      <p>
        Tilmeld dig vores service for at abonnere på opgaver der kommer i udbud,
        som passer til dine dit fagområde eller opret et udbud, hvor vi hjælper
        dig med at synliggøre det for de relevante virksomheder.
      </p>
      <div>
        <button onClick={() => router.push('/monitor')}>
          Abonner på udbud
        </button>
        <button onClick={() => router.push('/tender')}>Opret udbud</button>
      </div>
    </section>
  );
}
