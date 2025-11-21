import styles from './page.module.css';
import Image from 'next/image';

export default function Startseite() {
  return (
    <div className={styles.containerMain}>
      <Image
        src="/img/image4.jpg"
        alt="Kunstspenglerei Andreas Speiser"
        width={800}
        height={550}
        style={{ borderRadius: '0.5rem' }}
      />
    </div>
  );
}
