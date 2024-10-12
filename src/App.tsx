import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Support />
      </main>
      <Footer />
    </>
  );
}

export default App;
