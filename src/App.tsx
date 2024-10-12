import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Support from "./components/Support";
import Features from "./components/Features";
import Asset from "./components/Asset";
import Save from "./components/Save";
import Regulation from "./components/Regulation";
import Testimonial from "./components/Testimonial";
import Community from "./components/Community";
import Download from "./components/Download";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Support />
        <Features />
        <Asset />
        <Save />
        <Regulation />
        <Testimonial />
        <Community />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default App;
