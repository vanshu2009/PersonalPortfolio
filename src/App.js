import React from "react";
import Loader from "./Components/Loader";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
function App() {
  const main_styles={
    width:"100vw",
    minHeight:"300vh",
  }
  return (
    <React.Fragment>
      <Loader />
      <NavBar/>
      <main style={main_styles}>
        <HeroSection/>
      </main>
    </React.Fragment>
  );
}

export default App;
