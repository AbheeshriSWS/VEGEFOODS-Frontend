import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import WishHero from "../components/WishHero";
import WishProductList from "../components/WishProductList";
import News from "../components/News";
import Footer from "../components/Footer";

function Wish() {
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
      <WishHero />
      <WishProductList />
      <News />
      <Footer />
    </>
  );
}

export default Wish;