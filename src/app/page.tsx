import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GlobeComponent from "../components/Global";
import HeatmapSection from "../components/HeatMap";
import Complain from "../components/Complain";
import Track from "../components/Track";
import ContactUs from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <GlobeComponent />
      <HeatmapSection />
      <Complain />
      <Track />
      <ContactUs />
      <Footer />
    </div>
  );
}
