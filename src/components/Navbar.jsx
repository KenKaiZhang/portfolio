import { useMemo } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom";
import Underline from "../common/Underline";
import Socials from "../components/Socials";

const Navbar = ({ visible, toggle }) => {
    const location = useLocation();

    const pages = [
        { label: "HOME", value: ""},
        { label: "ABOUT", value: "about" }, 
    ]

    const rightPanelW = useMemo(() => (
        visible
        ? "w-[300px]"
        : "w-[0]"
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
            transition: { x: { stiffness: 1000 }}
        }
    }
    
    return (
       
        <motion.div 
            className="fixed top-0 right-0 z-50 bg-inherit text-inherit"
            initial="closed"
            animate={visible ? "open" : "closed"}
        >
            <button className="absolute z-50 top-8 right-8" onClick={toggle}>
                <svg width="45" height="45" viewBox="0 0 60 60">
                <motion.path
                    fill="transparent"
                    className="stroke-black dark:stroke-darkAccent"
                    strokeWidth="2"
                    variants={{
                    closed: { d: "M 0 4 L 60 4" },
                    open: { d: "M 15 15 L 45 45" }
                    }}
                />
                <motion.path
                    fill="transparent"
                    className="stroke-black dark:stroke-darkAccent"
                    strokeWidth="2"
                    variants={{
                    closed: { d: "M 20 20 L 60 20" },
                    open: { d: "M 15 45 L 45 15" }
                    }}
                />
                </svg>
            </button>
            <div className={`relative pt-24 h-screen shadow-left-md duration-300 ${rightPanelW}`}>                
                <motion.ul 
                    className="absolute top-24 left-8 flex flex-col gap-12 tracking-wide"
                    variants={menuVariants}
                >
                    {pages.map(({label, value}, i) => (
                        <motion.li  
                            key={i}
                            variants={menuItemVariants}
                            className={`${location.pathname === `/${value}` ? "font-bold" : "font-light"}`}
                        >
                            <Link to={value} onClick={toggle}>
                                <Underline>
                                    <p>{label}</p>
                                </Underline>
                            </Link>
                        </motion.li>   
                    ))}
                    <div className="h-[1px] w-[80%] bg-darkAccent opacity-25" />
                    <div className="flex flex-col gap-8 font-light tracking-wide">
                        <motion.li variants={menuItemVariants}>
                            <a href="/documents/chen_kai_zhang_resume.pdf" download>
                                <Underline><p>RESUME</p></Underline>
                            </a>
                        </motion.li>
                        <motion.li variants={menuItemVariants}>
                            <a href="mailto:ckzhang2674@gmail.com">
                                <Underline><p>REACH OUT</p></Underline>
                            </a>
                        </motion.li>
                    </div>
                    <motion.li key={5} variants={menuItemVariants}>
                        <Socials />
                    </motion.li>
                </motion.ul>
            </div>
        </motion.div> 
    )

}

export default Navbar