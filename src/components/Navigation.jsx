import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
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
      <div className={styles.reservation}>
        <span>Reservation: </span>+995 123 456 789
      </div>
    </nav>
  );
}

export default Navigation;
