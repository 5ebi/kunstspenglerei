import styles from './kontakt.module.css';

export default function Kontakt() {
  return (
    <div className={styles.kontaktContent}>
      <h1>Kontakt</h1>

      <div className={styles.infoSection}>
        <h2>Adresse</h2>
        <p>Billrothstrasse 56</p>
        <p>1190 Wien</p>

        <h2>Öffnungszeiten</h2>
        <p>Montag - Donnerstag: 8:00 - 16:40</p>
        <p>Freitag: 8:00 - 12:00</p>
      </div>

      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.891959615014!2d16.350552776652687!3d48.23991644587386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07eb3332a3eb%3A0x27c4e4124b69f123!2sBillrothstra%C3%9Fe%2056%2C%201190%20Wien!5e0!3m2!1sde!2sat!4v1707328901138!5m2!1sde!2sat"
          width="100%"
          height="450"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
