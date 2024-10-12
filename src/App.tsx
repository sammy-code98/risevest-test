import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Support from "./components/Support";
import Features from "./components/Features";
import Asset from "./components/Asset";
import Save from "./components/Save";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Support />
        <Features />
        <Asset/>
        <Save/>
      </main>
      <Footer />
    </>
  );
}

export default App;
