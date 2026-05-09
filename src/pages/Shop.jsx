import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import News from "../components/News";
import Footer from "../common/Footer";

function Shop() {
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
      <ShopHero />
      <ShopProducts />
      <News />
      <Footer />
    </>
  );
}

export default Shop;