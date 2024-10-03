import { AnimatePresence, easeIn, motion, useCycle } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedLogo from "./components/AnimatedLogo";
import Footer from "./components/Footer";

const App = () => {
  const [loading, toggleLoading] = useCycle(true, false)
  const [isRightMenu, toggleRightMenu] = useCycle(false, true)
  const [showTheme, toggleShowTheme] = useCycle(false, true)

  const loadingAnimate = {
    logo: {
      top: "2rem",
      left: "2rem",
      width: "50px",
      height: "50px",
      transition: { duration: 1, ease: "easeOut" }
    },
    backdrop: {
      height: 0,
      transition: { duration: 0.75 }
    }
  }

  const themeVariants = {
    open: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05 }
    }
  }
  const themeItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffnees: 1000, velocity: -100 } }
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: { y: { stiffness: 1000 }}
    }
  }

  const themeOptions = [
    "239,68,68",    // #EF4444
    "237,137,54",   // #ED8936
    "246,224,94",   // #F6E05E
    "72,187,120",   // #48BB78
    "56,178,172",   // #38B2AC
    "66,153,225",   // #4299E1
    "159,122,234"   // #9F7AEA
]

  const handleColorSelect = (option) => {
    document.documentElement.style.setProperty('--text-color', option)
    toggleShowTheme()
  } 

  return (
    <div className="relative w-screen h-screen bg-darkMain text-darkAccent">
        <motion.div
          className="fixed z-50 w-full h-full flex flex-col justify-center items-center"
          animate={!loading && loadingAnimate.logo}
        >
          <AnimatedLogo setLoading={toggleLoading} onClick={toggleShowTheme} />
          {
            !loading && (
              <motion.div 
                initial="closed"
                animate={showTheme ? "open" : "closed"}
                variants={themeVariants}
                className="absolute left-16 h-full flex gap-4 justify-center items-center"
              >
                {themeOptions.map((option) => (
                  <motion.div
                    key={option}
                    variants={themeItemVariants}
                    className={`h-1/2 aspect-square rounded-full cursor-pointer duration-300 hover:scale-150`}
                    style={{ background: `rgba(${option}, 1)`}}
                    onClick={() => handleColorSelect(option)}
                  />
                ))}
              </motion.div>
            )}
        </motion.div>  
      
      {
        !loading && (
          <>
            <div className={`fixed inset-0 z-40 w-full h-full bg-black/50 pointer-events-none duration-300 ${isRightMenu ? "opacity-100" : "opacity-0"} `} />
            <Navbar visible={isRightMenu} toggle={toggleRightMenu} />
            <div className="relative w-screen dark:bg-darkMain dark:text-darkAccent">
              <AnimatePresence>
                <Outlet />
              </AnimatePresence>
            </div>
            <Footer />
          </>
        )
      }    
    </div>
  );
}

export default App;
