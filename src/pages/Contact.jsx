import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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