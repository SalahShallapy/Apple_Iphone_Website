import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
import Chip from "./components/Chip.jsx";
import Footer from "./components/Footer.jsx";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <HeroSection />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
