import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Support from "./components/Support";
import Features from "./components/Features";
import Asset from "./components/Asset";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Support />
        <Features />
        <Asset/>
      </main>
      <Footer />
    </>
  );
}

export default App;
