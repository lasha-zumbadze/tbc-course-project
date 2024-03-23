import styles from "./Contact.module.css";
import Header from "../components1/Header";
import Footer from "../components1/Footer";
import contactGb from "../images/contact.jpg.webp";
import Logo from "../components1/Logo";
import facebookIcon from "../images/facebook-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import twitterIcon from "../images/twitter-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

function Contact() {
  return (
    <>
      <Header
        backgroundImg={contactGb}
        height={75}
        title="The Venue"
        subtitle="Contact"
      />
      <main>
        <div className={styles.contactInfo}>
          <h2>Contact info</h2>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti.
          </p>
          <Logo titleFont={5} subtitleFont={2} letterSpace={1} />
          <div className={styles.contactBox}>
            <p>
              <span>Address:</span> 481 Creekside Lane Avila CA 93424
            </p>
            <p>
              <span>Phone:</span> +995 123 456 789
            </p>
            <p>
              <span>Email:</span> example@gmail.com
            </p>
            <div className={styles.socialIcons}>
              <img src={facebookIcon} alt="facebook" />
              <img src={instagramIcon} alt="instagram" />
              <img src={twitterIcon} alt="twitter" />
              <img src={linkedinIcon} alt="linkedin" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
