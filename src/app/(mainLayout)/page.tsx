import styles from './page.module.css';
import HeroSection from '@/components/hero';

export default function Home() {
  return (
    <section className={styles.hero}>
      <HeroSection />
      <div style={{ height: '100vh' }}>This is a new section</div>
    </section>
  );
}
