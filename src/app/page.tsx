import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GlobeComponent from "../components/Global";
import HeatmapSection from "../components/HeatMap";
import Complain from "../components/Complain";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      <GlobeComponent />
      <HeatmapSection />
      <Complain />
    </div>
  );
}
