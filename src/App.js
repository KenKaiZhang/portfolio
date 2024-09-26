import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedLogo from "./components/AnimatedLogo";
import Footer from "./components/Footer";

const App = () => {
  const [loading, toggleLoading] = useCycle(true, false)
  // const [isLefttMenu, toggleLefttMenu] = useCycle(false, true)
  const [isRightMenu, toggleRightMenu] = useCycle(false, true)

  const loadingAnimate = {
    logo: {
      top: 0,
      left: 0,
      scale: 0.45,
      transition: { duration: 1 }
    },
    backdrop: {
      height: 0,
      transition: { duration: 0.75 }
    }
  }

  return (
    <div className="relative w-screen h-screen bg-white dark:bg-darkMain dark:text-darkAccent">
      
      <div className="fixed z-50 w-full h-screen flex justify-center items-center pointer-events-none">
        <motion.div
          className="absolute w-[100px] aspect-square"
          animate={!loading && loadingAnimate.logo}
        >
          <AnimatedLogo setLoading={toggleLoading}/>
        </motion.div>
        
      </div>
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
