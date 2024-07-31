import {motion} from "framer-motion";
import { ACCENT_COLOR } from "../constants/colors";
function NavBar(){
    const navBar_styles={
        position:"fixed",
        display:"flex",
        width:"90vw",
        justifyContent:"space-between",
        alignItems:"center",
        left:"50%",
        transform:"translate(-50%)",
        padding:"2rem",
        color:"black",
        list_styles:{
            display:"flex",
            listStyle:"none",
            gap:"1.5rem",
        }
    };
    const navbar_options=[
        {name:"Contact me" ,link:"/contacts"},
        {name:"About" ,link:"/about"},
        {name:"Projects" ,link:"/projects"},
        {name:"Research Work" ,link:"/resaerch"},
    ]

    return <motion.nav 
    initial={{
        transform:"translate(-50%,-200px)",
    }}
    animate={{
        transform:"translate(-50%)",
    }}
    transition={{
        delay:2.7,
        duration:0.5,
        ease:[0.85,0,0.15,1],
    }}
    style={navBar_styles}>
    <h1>Vanshika</h1>
        <ul style={navBar_styles.list_styles}>
            {navbar_options.map((item,index)=>{
                return <motion.li whileHover={{
                    y:-7,
                    cursor:"pointer",
                }}>{item.name}</motion.li>
            })}
        </ul>
    </motion.nav>
}
export default NavBar;