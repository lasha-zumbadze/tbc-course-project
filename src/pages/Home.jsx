import Header from "../components1/Header";
import homeGb from "../images/home.jpg.webp";

function Home() {
  return (
    <>
      <Header
        backgroundImg={homeGb}
        height={100}
        title="The Venue is"
        subtitle="An Extraordinary Experience"
      />
    </>
  );
}

export default Home;
