import Image from 'next/image';

// import styles from './page.module.css';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <h1 style={{ color: 'white', fontWeight: '200', fontSize: '5rem' }}>
          Kunstspenglerei Andreas Speiser
        </h1>
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: -1,
          width: '100%',
          height: '100%',
          opacity: 0.25,
        }}
      >
        <Image
          src="/handwerker.jpg"
          alt="Metall-Handwerker in Werkstatt"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
