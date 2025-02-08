import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection.jsx";
import Model from "./components/Model.jsx";
const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <HeroSection />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
