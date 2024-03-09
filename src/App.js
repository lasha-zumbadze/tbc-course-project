export default function App() {
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <div className="logo">
            <p>The Venue</p>
            <p>RESTAURANT</p>
          </div>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Services</li>
            <li>Contant</li>
          </ul>
          <div className="reservation">
            <span>Reservation: </span>+995 123 456 789
          </div>
        </nav>
        <div className="title">
          <h1>The Venue is</h1>
          <p>An Extraordinery Experience</p>
        </div>
      </header>

      <main>
        <section className="about-us">
          <div className="images">
            <img src="images\about-1.jpg.webp" alt="cooking" />
            <img src="images/about-2.jpg" alt="cooking" />
          </div>
        </section>
      </main>
    </>
  );
}
