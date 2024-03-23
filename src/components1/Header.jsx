import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo";

function Header({ backgroundImg, height, title, subtitle }) {
  return (
    <header
      style={{
        background: `url(${backgroundImg})`,
        height: `${height}vh`,
      }}
      className={styles.header}
    >
      <nav className={styles.navigation}>
        <Logo />
        <ul>
          <Link to="/">Home</Link>
          <li>About us</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Services</li>
          <li>Blog</li>
          <Link to="contact">Contant</Link>
        </ul>
        <div className={styles.reservation}>
          <span>Reservation: </span>+995 123 456 789
        </div>
      </nav>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
