import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <p>The Venue</p>
        <p>RESTAURANT</p>
      </div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Menu</li>
        <li>Delivery</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contant</li>
      </ul>
    </footer>
  );
}

export default Footer;
