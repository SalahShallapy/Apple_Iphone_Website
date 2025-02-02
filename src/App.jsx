import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection.jsx";
const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <HeroSection />
      <Highlights />
    </main>
  );
};

export default App;
