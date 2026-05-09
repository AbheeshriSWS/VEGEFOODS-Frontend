import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import CartHero from "../components/CartHero";
import CartMain from "../components/CartMain";
import News from "../components/News";
import Footer from "../common/Footer";

function Cart() {
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
      <CartHero />
      <CartMain />
      <News />
      <Footer />
    </>
  );
}

export default Cart;