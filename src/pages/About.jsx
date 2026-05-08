import AnnBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero"
import Welcome from "../components/Welcome"
import News from "../components/News";
import Rewards from "../components/Rewards";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";

function About(){
    return(
        <>
            <AnnBar />
            <Navbar />
            <AboutHero />
            <Welcome />
            <News />
            <Rewards />
            <Testimony />
            <Footer />
        </>
    );
}

export default About;