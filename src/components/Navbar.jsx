import { useMemo } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom";
import Underline from "../common/Underline";

const Navbar = ({ visible, toggle }) => {
    const location = useLocation();

    const pages = [
        { label: "ABOUT", value: "about" }, 
        { label: "WORK", value: "work" }, 
        { label: "PROJECTS", value: "projects" }, 
    ]

    const rightPanelW = useMemo(() => (
        visible
        ? "w-[300px]"
        : "w-[100px]"
    ), [visible])
    
    const menuVariants = {
    open: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
    }
    const menuItemVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: { x: { stiffnees: 1000, velocity: -100 } }
    },
    closed: {
        x: 50,
        opacity: 0,
        transition: { x: { stiffness: 1000 } }
    }
    }
    
    return (
       
      <div className={`fixed top-0 right-0 z-50 h-screen shadow-left-md bg-white duration-300 ${rightPanelW}`}>
        <button className="absolute top-8 right-8" onClick={toggle}>
            <svg width="45" height="45" viewBox="0 0 60 60">
            <motion.path
                fill="transparent"
                stroke="black"
                strokeWidth="2"
                variants={{
                closed: { d: "M 0 4 L 60 4" },
                open: { d: "M 15 15 L 45 45" }
                }}
            />
            <motion.path
                fill="transparent"
                stroke="black"
                strokeWidth="2"
                variants={{
                closed: { d: "M 20 20 L 60 20" },
                open: { d: "M 15 45 L 45 15" }
                }}
            />
            </svg>
        </button>
        <motion.ul 
            className="absolute top-24 left-12 flex flex-col gap-12 tracking-[0.25em] text-[1em]"
            variants={menuVariants}
        >
            {pages.map(({label, value}, i) => (
                <motion.li  
                    key={i}
                    variants={menuItemVariants}
                    className={`${location.pathname === `/${value}` ? "font-bold" : "font-normal"}`}
                >
                    <Link 
                        to={value} 
                        onClick={toggle}
                    >
                        <Underline label={label} />
                    </Link>
                </motion.li>   
            ))}
        </motion.ul>
        </div> 
    )

}

export default Navbar