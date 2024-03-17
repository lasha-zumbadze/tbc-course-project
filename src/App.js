import image1 from "./images/about-1.png";
import image2 from "./images/about-2.png";
import breakfastImg1 from "./images/breakfast-1.png";
import breakfastImg2 from "./images/breakfast-2.png";
import breakfastImg3 from "./images/breakfast-3.png";
import breakfastImg4 from "./images/breakfast-4.png";
import breakfastImg5 from "./images/breakfast-5.png";
import breakfastImg6 from "./images/breakfast-6.png";
import birthdayIcon from "./images/birthday-icon.png";
import meetingIcon from "./images/meeting-icon.png";
import weddingIcon from "./images/wedding-icon.png";

import BlogPosts from "./components/BlogPosts";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <BlogPosts />;
      <Footer />
    </div>
  );

  // return (
  //   <>
  //     <header className="header">
  //       <nav className="navigation">
  //         <div className="logo">
  //           <p>The Venue</p>
  //           <p>RESTAURANT</p>
  //         </div>
  //         <ul>
  //           <li>Home</li>
  //           <li>About us</li>
  //           <li>Menu</li>
  //           <li>Delivery</li>
  //           <li>Services</li>
  //           <li>Blog</li>
  //           <li>Contant</li>
  //         </ul>
  //         <div className="reservation">
  //           <span>Reservation: </span>+995 123 456 789
  //         </div>
  //       </nav>
  //       <div className="title">
  //         <h1>The Venue is</h1>
  //         <p>An Extraordinery Experience</p>
  //       </div>
  //     </header>
  //     <main>
  //       <section className="about-us">
  //         <div className="info">
  //           <div>
  //             <img src={image1} alt="cooking" />
  //           </div>
  //           <div>
  //             <img src={image2} alt="cooking" />
  //           </div>
  //         </div>
  //         <div className="about">
  //           <h2>About us</h2>
  //           <h3>An Extraordinary Experience</h3>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  //             malesuada lorem maximus mauris scelerisque, at rutrum nulla
  //             dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
  //             Ut non justo eleifend, facilisis nibh ut, interdum odio.
  //             Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
  //             aliquet dolor venenatis. Nulla consequat fringilla massa.
  //           </p>
  //         </div>
  //       </section>
  //       <section className="services">
  //         <div className="services-title">
  //           <h2>Services</h2>
  //           <h3>Catering Services</h3>
  //         </div>
  //         <div className="services-grid">
  //           <div className="service birthday">
  //             <img src={birthdayIcon} alt="icon" />
  //             <h3>Birthday Party</h3>
  //             <p>
  //               Even the all-powerful Pointing has no control about the blind
  //               texts it is an almost unorthographic.
  //             </p>
  //           </div>
  //           <div className="service meeting">
  //             <img src={meetingIcon} alt="icon" />
  //             <h3>Business Meeting</h3>
  //             <p>
  //               Even the all-powerful Pointing has no control about the blind
  //               texts it is an almost unorthographic.
  //             </p>
  //           </div>
  //           <div className="service wedding">
  //             <img src={weddingIcon} alt="icon" />
  //             <h3>Wedding Party</h3>
  //             <p>
  //               Even the all-powerful Pointing has no control about the blind
  //               texts it is an almost unorthographic.
  //             </p>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="menu">
  //         <div className="menu-title">
  //           <h2>Speciallies</h2>
  //           <h3>Our Menu</h3>
  //         </div>
  //         <div className="menu-grid">
  //           <img src={breakfastImg1} alt="meal" />
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //           <img src={breakfastImg2} alt="meal" />
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //           <img src={breakfastImg3} alt="meal" />
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //           <img src={breakfastImg4} alt="meal" />
  //           <img src={breakfastImg5} alt="meal" />
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //           <img src={breakfastImg6} alt="meal" />
  //           <div className="meal">
  //             <div className="meal-title">
  //               <h4>
  //                 Grilled Beef
  //                 <br /> with potatoes
  //               </h4>
  //               <p className="price">$29</p>
  //             </div>
  //             <p className="ingredients">Meat, Potatoes, Rice, Tomatoe</p>
  //             <button className="order-meal">Order now</button>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="reservation-table">
  //         <div className="reservation-title">
  //           <h2>5 Stars</h2>
  //           <h3>Make a Reservation</h3>
  //         </div>
  //         <div className="reservation-options">
  //           <input type="date" />
  //           <select>
  //             <option>Time</option>
  //             <option>10:00 AM</option>
  //             <option>11:00 AM</option>
  //             <option>12:00 PM</option>
  //             <option>01:00 PM</option>
  //             <option>02:00 PM</option>
  //             <option>03:00 PM</option>
  //             <option>04:00 PM</option>
  //             <option>05:00 PM</option>
  //             <option>06:00 PM</option>
  //             <option>07:00 PM</option>
  //             <option>08:00 PM</option>
  //             <option>09:00 PM</option>
  //             <option>10:00 PM</option>
  //           </select>
  //           <select>
  //             <option>Person</option>
  //             <option>1</option>
  //             <option>2</option>
  //             <option>3</option>
  //             <option>4+</option>
  //           </select>
  //         </div>
  //         <button>Make a Reservation</button>
  //       </section>
  //     </main>
  //     <footer className="footer">
  //       <div>
  //         <div className="logo">
  //           <p>The Venue</p>
  //           <p>RESTAURANT</p>
  //         </div>
  //         <p>Copyright &#169; 2024 All rights reserved.</p>
  //         <p className="terms-conditions">Terms and Conditions</p>
  //       </div>
  //       <div className="contact">
  //         <h3>Contact</h3>
  //         <p>481 Creekside Lane Avila CA 93424</p>
  //         <p>+995 123 456 789</p>
  //         <p>example@gmail.com</p>
  //       </div>
  //       <div className="newsletter">
  //         <h3>Newsletter</h3>
  //         <input type="email" placeholder="Enter email address" />
  //         <button className="subscribe">Subscribe</button>
  //       </div>
  //     </footer>
  //   </>
  // );
}
