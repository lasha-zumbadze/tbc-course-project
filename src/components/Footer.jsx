import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>
          <p>The Venue</p>
          <p>RESTAURANT</p>
        </div>
        <p>Copyright &#169; 2024 All rights reserved.</p>
        <p className={styles.termsConditions}>Terms and Conditions</p>
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
    </footer>
  );
}

export default Footer;
