import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Hero from "../components/Hero";
import ShopNow from "../components/ShopNow";
import Product from "../components/Product";
import Deal from "../components/Deal";
import Testimony from "../components/Testimony";
import News from "../components/News";
import Footer from "../common/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return <Loader />;
    }

  return (
    <>
      <AnnBar />
      <Navbar />
      <Hero />
      <ShopNow />
      <Product />
      <Deal />
      <Testimony />
      <News />
      <Footer />
    </>
  );
}

export default Home;