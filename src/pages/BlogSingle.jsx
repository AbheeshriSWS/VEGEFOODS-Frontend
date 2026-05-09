import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import BlogHero from "../components/BlogHero";
import BlogSingleCompo from "../components/BlogSingleCompo";
import News from "../components/News";
import Footer from "../common/Footer";

function BlogSingle() {
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
      <BlogSingleCompo />
      <News />
      <Footer />
    </>
  );
}

export default BlogSingle;