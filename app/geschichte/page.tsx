import Image from 'next/image';
import styles from './geschichte.module.css';

export default function handwerk() {
  return (
    <div className={styles.background}>
      <Image
        src="https://thumbs.dreamstime.com/z/white-circle-round-point-black-background-design-pattern-wallpaper-tile-vector-illustration-160157453.jpg"
        alt="Hintergrundbild"
        fill
        style={{ objectFit: 'cover', opacity: 0.15 }}
        quality={100}
        priority
      />
      <div className={styles.geschichteContent}>
        <h1>Tradition trifft Innovation</h1>

        <div className={styles.handwerkcontent}>
          <h2>Familienbetrieb in dritter Generation</h2>
          <p>
            Seit 1952 fertigen wir edle Metallarbeiten in unserer
            Familienmanufaktur. Was als kleine Werkstatt begann, hat sich zu
            einer modernen Kunstschmiede entwickelt, die traditionelles Handwerk
            mit zeitgemäßer Gestaltung verbindet.
          </p>
          <br />

          <h2>Unsere Materialien</h2>
          <p>
            In unserer 400m² großen Werkstatt verarbeiten wir ausgewählte
            Metalle:
          </p>
          <ul>
            <li>Edles Messing mit warmem Glanz</li>
            <li>Hochwertiges Kupfer für besondere Akzente</li>
            <li>Feinster Edelstahl für zeitlose Eleganz</li>
          </ul>
          <br />

          <h2>Kunsthandwerk & Design</h2>
          <p>
            Von handgefertigten Designerlampen über kunstvolle Treppengeländer
            bis zu filigranen Wandobjekten – wir gestalten Unikate nach Ihren
            individuellen Wünschen. Unsere Spezialität liegt in der Verarbeitung
            dünnster Bleche zu dreidimensionalen Kunstwerken.
          </p>
          <br />

          <h2>Manufaktur</h2>
          <p>
            Die Verbindung von traditioneller Handwerkskunst und modernen
            Fertigungsmethoden ermöglicht uns höchste Präzision. Jedes Werkstück
            wird von Meisterhand gefertigt und veredelt.
          </p>
        </div>
      </div>
    </div>
  );
}
