import React from "react";
import Vanshika from "../myphoto.png";
import {motion} from "framer-motion";
function FloatingPicture(){
    const [mousePosition,setMousePosition]=React.useState({x:0,y:0});

    React.useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{setMousePosition({x:e.clientX,y:e.clientY})});
    },[]);
    const floating_styles={
        height:"50vh",
        width:"30vw",
        position:"absolute",
        left:"50%",
        transform:`translate(calc(-50% + ${(mousePosition.x  -(window.innerWidth/2))/15}px))`,
        transition:"all 250ms ease-out",
        top:"40vh",
        display:"flex",
        justifyContent:"center",
        zIndex:"9",
        inner_img:{
            height:"100%",
            width:"80%",
            objectFit:"cover",
            background:"linear-gradient(to bottom,transparent 50%,white)",
            borderRadius:"3rem",
            
        }
    }
    return <div style={floating_styles}>
        <motion.img 
        initial={{
            y:"60vh",
        }}
        animate={{
            y:0,
        }}
        transition={{
            delay:2.5,
            duration:0.75,
            ease:[0.85,0,0.15,1],
        }}
        src={Vanshika} style={floating_styles.inner_img}/>
    </div>
}
export default FloatingPicture;