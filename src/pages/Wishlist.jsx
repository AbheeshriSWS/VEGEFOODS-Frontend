import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import WishHero from "../components/WishHero";
import WishProductList from "../components/WishProductList";
import News from "../components/News";
import Footer from "../components/Footer";

function Wish() {
  return (
    <>
      <AnnBar />
      <Navbar />
      <WishHero />
      <WishProductList />
      <News />
      <Footer />
    </>
  );
}

export default Wish;