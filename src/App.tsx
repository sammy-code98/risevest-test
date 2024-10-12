import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Support from "./components/Support";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Support />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
