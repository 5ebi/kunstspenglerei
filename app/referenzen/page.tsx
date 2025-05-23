import styles from './referenzen.module.css';

export default function referenzen() {
  return (
    <div className={styles.referenzenContent}>
      <h1>Referenzen</h1>
      <div className={styles.textContainer}>
        <h2>Hotel Sacher Wien</h2>
        <p>
          Restaurierung historischer Kupferelemente und Anfertigung
          maßgefertigter Spengler-Arbeiten für das renommierte 5-Sterne-Hotel im
          Herzen Wiens.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2>Schloss Schönbrunn</h2>
        <p>
          Umfangreiche Restaurierungsarbeiten an den historischen Dachelementen
          und Regenrinnen des UNESCO-Weltkulturerbes.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2>Stephansdom Wien</h2>
        <p>
          Spezialanfertigungen und Restaurierungsarbeiten an den kupfernen
          Dachelementen des Wiener Wahrzeichens.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2>Kunsthistorisches Museum</h2>
        <p>
          Fachgerechte Restaurierung historischer Metallelemente und Herstellung
          von Spezialanfertigungen für das prestigeträchtige Museum.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2>Palais Liechtenstein</h2>
        <p>
          Detailgenaue Rekonstruktion historischer Dachelemente und
          Restaurierung bestehender Metallarbeiten am Stadtpalais.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2>Österreichische Nationalbibliothek</h2>
        <p>
          Sorgfältige Restaurierung der historischen Kupferelemente und
          Neuanfertigung von Spengler-Arbeiten im Prunksaal.
        </p>
      </div>
    </div>
  );
}
