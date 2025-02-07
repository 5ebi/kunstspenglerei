import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image
        src="/img/image1.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image2.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image3.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image4.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image5.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image6.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image7.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image8.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image9.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/img/image10.jpg"
        alt="Metall-Handwerker in Werkstatt"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
