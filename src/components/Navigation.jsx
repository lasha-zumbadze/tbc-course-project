import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <p>The Venue</p>
        <p>RESTAURANT</p>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <li>About us</li>
        <li>Menu</li>
        {/* <li>Delivery</li> */}
        <li>Services</li>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contant</Link>
        <Link to="/profile">Profile</Link>
      </ul>
      <div className={styles.reservation}>
        <span>Reservation: </span>+995 123 456 789
      </div>
    </nav>
  );
}

export default Navigation;
