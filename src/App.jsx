import React, { useState, useEffect } from 'react';
import CineHackHeader from "./CineHeader";
import PillNav from "./components/PillNav";
import logo from "../src/star.png";
import About from "./About";
import Contact from "./Contact";
import ProblemStatements from "./ProblemStatements";
import CardSwiper from "./components/CardSwiper";
import PrizesAndOpportunities from "./Prizes";
import Timeline from "./components/Timeline";
import Footer from "./footer";
import LightsCameraAlgorithmLoader from "./components/Loader"; // Import the loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000); // 3 seconds loading time

    // Optional: Also wait for all critical resources to load
    const handleLoad = () => {
      // Add a minimum loading time to ensure users see the animation
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Show loader while loading
  if (isLoading) {
    return <LightsCameraAlgorithmLoader />;
  }

  // Show main app content after loading
  return (
    <>
      <PillNav
        logo={logo}
        logoAlt="FISAT Logo"
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label:"Contact", href: "#contact" },
          { label: "Timeline", href: "#timeline" },
          { label: "Register", href: "#register" },
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#0a1535"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
      />
      <CineHackHeader />
      <About />
      <PrizesAndOpportunities />
      <ProblemStatements />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;