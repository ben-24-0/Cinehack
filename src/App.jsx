import CineHackHeader from "./header";
import PillNav from "./components/PillNav";
import logo from "../src/LOGO.png";
import About from "./About";
import CardSwiper from "./components/CardSwiper";
import PrizesAndOpportunities from "./Prizes";
import  Timeline  from "./components/Timeline";
function App() {
  return (
    <>
      <PillNav
        logo={logo}
        logoAlt="FISAT Logo"
        items={[
          { label: "Home", href: "#home" },

          { label: "About", href: "#about" },

          { label: "Prizes", href: "#prizes" },

          { label: "Register", href: "#register" },
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <CineHackHeader />
      <About />
      <PrizesAndOpportunities />
      
      <Timeline/>
    </>
  );
}

export default App;
