import styles from "./Footer.module.css";
import reservationBg from "../images/reservations.png";
import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <section
        style={{ background: `url(${reservationBg})` }}
        className={styles.reservationTable}
      >
        <div className={styles.reservationTitle}>
          <h2>5 Stars</h2>
          <h3>Make a Reservation</h3>
        </div>
        <div className={styles.reservationOptions}>
          <input type="date" />
          <select>
            <option>Time</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>01:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
            <option>05:00 PM</option>
            <option>06:00 PM</option>
            <option>07:00 PM</option>
            <option>08:00 PM</option>
            <option>09:00 PM</option>
            <option>10:00 PM</option>
          </select>
          <select>
            <option>Person</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>
        <button>Make a Reservation</button>
      </section>

      <div className={styles.footer}>
        <div>
          <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
          <div className={styles.terms}>
            <p>Copyright &#169; 2024 All rights reserved.</p>
            <p className={styles.termsConditions}>Terms and Conditions</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>481 Creekside Lane Avila CA 93424</p>
          <p>+995 123 456 789</p>
          <p>example@gmail.com</p>
        </div>
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter email address" />
          <button className={styles.subscribe}>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
