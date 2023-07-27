'use client';
import styles from '@/page.module.css';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className={styles.frontpage}>
      <h1 className={styles.center}>TenderTask</h1>
      <p>
        Tilmeld dig nyhedsbrev og bliv opdateret på opgaver i udbud, som matcher
        dine kriterier, eller opret et udbud, hvor vi hjælper dig med at
        synliggøre det for relevante kandidater
      </p>
      <div>
        <button onClick={() => router.push('/monitor')}>
          Tilmeld email liste
        </button>
        <button onClick={() => router.push('/tender')}>Opret udbud</button>
      </div>
    </section>
  );
}
