import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import SingleHero from "../components/SingleHero";
import SingleCompo from "../components/SingleCompo";
import News from "../components/News";
import Footer from "../common/Footer";

function Single() {
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
      <SingleHero />
      <SingleCompo />
      <News />
      <Footer />
    </>
  );
}

export default Single;