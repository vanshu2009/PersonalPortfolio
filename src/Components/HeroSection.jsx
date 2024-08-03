import { PRIMARY_COLOR } from "../constants/colors";
import { color, motion } from "framer-motion";
function HeroSection() {
  const hero_styles = {
    height: "100vh",
    width: "100vw",
    background: PRIMARY_COLOR,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    inner_div: {
      height: "80%",
      width: "90%",
      padding: "3rem",
      init_heading: {
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "300",
        marginTop: "3rem",
      },
      first_heading: {
        textAlign: "center",
        fontSize: "12rem",
        letterSpacing: "0.5rem",
        lineHeight: "0.1em",
        marginTop: "12.5vh",
      },
      second_heading: {
        textAlign: "center",
        fontSize: "12rem",
        letterSpacing: "0.5rem",
        marginTop: "1rem",
        color:"white",
      },
    },
  };
  return (
    <section style={hero_styles}>
      <div style={hero_styles.inner_div}>
        <motion.h4
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 2.75,
            duration: 0.5,
            ease: [0.85, 0, 0.15, 1],
          }}
          style={hero_styles.inner_div.init_heading}
        >
          Hello👋,I'm Vanshika a Software Developer
        </motion.h4>
        <motion.h1
          initial={{
            x: 200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 1.55,
            duration: 2,
            ease: [0.85, 0, 0.15, 1],
          }}
          className={"BebasNeue"}
          style={hero_styles.inner_div.first_heading}
        >
          Webdeveloper
        </motion.h1>
        <motion.h1
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 1.55,
            duration: 2,
            ease: [0.85, 0, 0.15, 1],
          }}
          className={"BebasNeue"}
          style={hero_styles.inner_div.second_heading}
        >
          <span>&</span>
          Researcher
        </motion.h1>
      </div>
    </section>
  );
}
export default HeroSection;
