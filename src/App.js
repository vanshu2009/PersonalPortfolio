import React from "react";
import Loader from "./Components/Loader";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import FloatingPicture from "./Components/FloatingPicture";
function App() {
  React.useEffect(() => {
    (async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new locomotiveScroll();
    })();
  }, []);
  const main_styles = {
    width: "100vw",
    minHeight: "300vh",
  };
  return (
    <React.Fragment>
      <Loader />
      <NavBar />
      <FloatingPicture />
      <main style={main_styles}>
        <HeroSection />
      </main>
    </React.Fragment>
  );
}

export default App;
