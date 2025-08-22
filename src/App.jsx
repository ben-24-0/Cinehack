import React, { useState, useEffect } from 'react';
import CineHackHeader from "./CineHeader";
import PillNav from "./components/PillNav";
import About from "./About";
import Contact from "./Contact";
import ProblemStatements from "./ProblemStatements";
import CardSwiper from "./components/CardSwiper";
import PrizesAndOpportunities from "./Prizes";
import Timeline from "./Timeline";
import Footer from "./footer";
import LightsCameraAlgorithmLoader from "./components/Loader"; // Import the loader

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // NEW state for toggle

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

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
   useEffect(() => {
  if (!isLoading && window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [isLoading]);
  // Show loader while loading
  if (isLoading) {
    return <LightsCameraAlgorithmLoader />;
  }
 

  // Show main app content after loading
  return (
    <>
      <PillNav
        logoAlt="FISAT Logo"
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
              { label: "Problem Statements", href: "#problems" },
          { label: "Timeline", href: "#timeline" },
      
          { label:"Contact", href: "#contact" },
          
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#0a1535"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
        isDarkMode={isDarkMode} // pass state
        onThemeToggle={() => setIsDarkMode(!isDarkMode)} // toggle state
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
