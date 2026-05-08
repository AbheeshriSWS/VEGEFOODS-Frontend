import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import BlogMain from "../components/BlogMain";
import Footer from "../components/Footer";

function Blog() {
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
      <BlogHero />
      <BlogMain />
      <Footer />
    </>
  );
}

export default Blog;