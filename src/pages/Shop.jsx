import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <AnnBar />
      <Navbar />
      <ShopHero />
      <ShopProducts />
      <News />
      <Footer />
    </>
  );
}

export default Home;