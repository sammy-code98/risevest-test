// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Support from "./components/Support";
// import Features from "./components/Features";
// import Asset from "./components/Asset";
// import Save from "./components/Save";
// import Regulation from "./components/Regulation";
// import Testimonial from "./components/Testimonial";
// import Community from "./components/Community";
// import Download from "./components/Download";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <Support />
//         <Features />
//         <Asset />
//         <Save />
//         <Regulation />
//         <Testimonial />
//         <Community />
//         <Download />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from './components/Utility/Loader';

const Hero = React.lazy(() => import("./components/Hero"));
const Support = React.lazy(() => import("./components/Support"));
const Features = React.lazy(() => import("./components/Features"));
const Asset = React.lazy(() => import("./components/Asset"));
const Save = React.lazy(() => import("./components/Save"));
const Regulation = React.lazy(() => import("./components/Regulation"));
const Testimonial = React.lazy(() => import("./components/Testimonial"));
const Community = React.lazy(() => import("./components/Community"));
const Download = React.lazy(() => import("./components/Download"));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Hero />
          <Support />
          <Features />
          <Asset />
          <Save />
          <Regulation />
          <Testimonial />
          <Community />
          <Download />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;