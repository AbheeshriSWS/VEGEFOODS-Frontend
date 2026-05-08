import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import SingleHero from "../components/SingleHero";
import SingleCompo from "../components/SingleCompo";
import News from "../components/News";
import Footer from "../components/Footer";

function Single() {
  return (
    <>
      <AnnBar />
      <Navbar />
      <SingleHero />
      <SingleCompo />
      <News />
      <Footer />
    </>
  );
}

export default Single;