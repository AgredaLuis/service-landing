import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSections";
import Pricing from "./sections/PricingSection";
import Workflow from "./sections/WorkflowSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
