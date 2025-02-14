'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [titleOpacity, setTitleOpacity] = useState(1); // New state for title opacity
  const [isShowingLarge, setIsShowingLarge] = useState(false);

  // Calculate image size to ensure full coverage
  const calcImageSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Fixed image base size
    const baseSize = 100;

    // Calculate number of images needed (add +2 to ensure overflow)
    const numColumns = Math.ceil(screenWidth / baseSize) + 1;
    const numRows = Math.ceil(screenHeight / baseSize) + 1;

    // Calculate image size as percentage to ensure full coverage
    const imageWidth = 100 / (numColumns - 1) + '%';

    return {
      width: imageWidth,
      totalImages: numColumns * numRows,
    };
  };

  const { width, totalImages } = calcImageSize();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Show background images after 3 seconds
    timeout = setTimeout(() => {
      setBackgroundOpacity(0.5); // Changed from 0.2 to 0.5
    }, 3000);

    // Fade out title at 6 seconds (1 second before first large image)
    timeout = setTimeout(() => {
      setTitleOpacity(0);
    }, 2800);

    const showNextImage = () => {
      // Neues Bild wählen
      const randomIndex = Math.floor(Math.random() * totalImages);
      setHighlightedIndex(randomIndex);
      setImageOpacity(0);
      setIsShowingLarge(true);
      setBackgroundOpacity(0.1); // Reduce background opacity

      // Einblenden
      timeout = setTimeout(() => {
        setImageOpacity(1);

        // 3 Sekunden anzeigen
        timeout = setTimeout(() => {
          // Ausblenden
          setImageOpacity(0);
          setIsShowingLarge(false);
          setBackgroundOpacity(0.5); // Reset background opacity

          // 3 Sekunden Pause vor nächstem Bild
          timeout = setTimeout(showNextImage, 3000);
        }, 5000);
      }, 100);
    };

    // Initial delay of 7 seconds before starting the image cycle
    timeout = setTimeout(() => {
      showNextImage();
    }, 7000);

    return () => clearTimeout(timeout);
  }, [totalImages]);

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
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: titleOpacity,
          transition: 'opacity 1s ease-in-out', // Smooth fade out
        }}
      >
        kunstspenglerei.at
      </h1>

      <p>kontakt</p>
      <p>impressum</p>
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
        {[...Array(totalImages)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: width,
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
