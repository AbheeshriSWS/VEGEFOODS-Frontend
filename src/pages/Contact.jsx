import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer from "../common/Footer";

function Contact() {
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
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;