import React from "react";
import {color, motion} from "framer-motion";
import { PRIMARY_COLOR ,SECONDARY_COLOR,ACCENT_COLOR} from "../constants/colors";
function Loader() {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    if (state < 100)
      setTimeout(() => {
        setState(state + 1);
      }, 11);
  }, [state]);

  const loader_styles = {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    background: PRIMARY_COLOR,
    zIndex:10,
    overflow:"hidden",
    inner_div: {
      height: "100%",
      width: `${state}%`,
      background:SECONDARY_COLOR,
      transition:"all 250ms",
      inner_heading:{
        fontSize:"10rem",
        bottom:"1rem",
        right:"1rem",
        position:"absolute",
        color:ACCENT_COLOR,
      }
    },
  };
  return (
    <motion.div 
    animate={{
      y:"-100vh",
      scale:0,
      borderRadius:"50%",
    }}
    transition={{
      delay:2,
      duration:1,
      ease:[0.85,0,0.15,1],
    }}
    style={loader_styles}>
      <div style={loader_styles.inner_div}>
        <h1 style={loader_styles.inner_div.inner_heading}>{state}</h1>
      </div>
    </motion.div>
  );
}


export default Loader;