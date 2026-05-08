import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import CheckoutHero from "../components/CheckoutHero";
import CheckoutMain from "../components/CheckoutMain";
import News from "../components/News";
import Footer from "../components/Footer";

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
      <CheckoutHero />
      <CheckoutMain />
      <News />
      <Footer />
    </>
  );
}

export default Cart;