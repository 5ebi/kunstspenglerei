'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [titleScale, setTitleScale] = useState(1);
  const [titleBlur, setTitleBlur] = useState(0);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: '10%',
    totalImages: 100,
  });

  // Move window calculations into useEffect
  useEffect(() => {
    const calcImageSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const baseSize = 70;
      const numColumns = Math.ceil(screenWidth / baseSize) + 1;
      const numRows = Math.ceil(screenHeight / baseSize) + 1;
      const imageWidth = 100 / (numColumns - 1) + '%';

      setDimensions({
        width: imageWidth,
        totalImages: numColumns * numRows,
      });
    };

    calcImageSize();
    window.addEventListener('resize', calcImageSize);
    return () => window.removeEventListener('resize', calcImageSize);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setBackgroundOpacity(0.5);
    }, 3000);

    timeout = setTimeout(() => {
      setTitleOpacity(0);
    }, 2800);

    timeout = setTimeout(() => {
      setNavbarOpacity(1);
    }, 4000);

    setTimeout(() => {
      setTitleScale(5);
    }, 1500);

    setTimeout(() => {
      setTitleScale(1000);
    }, 3000);

    const showNextImage = () => {
      const randomIndex = Math.floor(Math.random() * dimensions.totalImages);
      setHighlightedIndex(randomIndex);
      setImageOpacity(0);

      setBackgroundOpacity(0.1); // Reduce background opacity

      // Einblenden
      timeout = setTimeout(() => {
        setImageOpacity(1);

        // 3 Sekunden anzeigen
        timeout = setTimeout(() => {
          // Ausblenden
          setImageOpacity(0);

          setBackgroundOpacity(0.5); // Reset background opacity

          // 3 Sekunden Pause vor nächstem Bild
          timeout = setTimeout(showNextImage, 3000);
        }, 5000);
      }, 100);
    };

    timeout = setTimeout(() => {
      showNextImage();
    }, 7000);

    return () => clearTimeout(timeout);
  }, [dimensions.totalImages]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'black',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          color: 'white',
          fontWeight: '300',
          position: 'absolute',
          fontSize: '2rem',
          zIndex: 2,
          width: '100%',
          textAlign: 'center',
          top: '50%',
          transform: `scale(${titleScale})`,
          filter: `blur(${titleBlur}px)`,
          opacity: titleOpacity,
          transition:
            'transform 7s cubic-bezier(0.01, 0, 0.2, 1), opacity 1s ease-in-out',
          transformOrigin: 'center center',
        }}
      >
        kunstspengler.at
      </h1>
      <div
        style={{
          color: 'white',
          fontWeight: '300',
          position: 'absolute',
          fontSize: '1rem',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          textAlign: 'center',
          top: '95%',
          left: '0%',
          // transform: 'translate(-50%, -50%)',
          opacity: navbarOpacity,
          justifyContent: 'center', // Horizontale Zentrierung
          gap: '2rem', // Abstand zwischen den Elementen
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <p>kontakt</p>
        <p>impressum</p>
      </div>
      {/* Hintergrundbilder */}
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% + 10px)', // Add extra width to prevent gaps
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '-5px',
          marginTop: '-5px',
        }}
      >
        {[...Array(dimensions.totalImages)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: dimensions.width,
              aspectRatio: '1',
            }}
          >
            <Image
              src={`/img/image${(index % 10) + 1}.jpg`}
              alt={`Bild ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                opacity: backgroundOpacity,
                transition: 'opacity 2s ease-in-out',
              }}
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Hervorgehobenes Bild */}
      {highlightedIndex !== null && (
        <div
          style={{
            position: 'absolute',
            top: '15vh',
            left: '15vw',
            width: '70vw',
            height: '70vh',
            zIndex: 3,
            opacity: imageOpacity,
            transition: 'opacity 2s ease-in-out',
          }}
        >
          <Image
            src={`/img/image${(highlightedIndex % 10) + 1}.jpg`}
            alt={`Hervorgehobenes Bild ${highlightedIndex}`}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      )}
    </div>
  );
}
