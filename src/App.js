import { motion, useCycle } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "./common/Logo";
import Navbar from "./components/Navbar";
import Underline from "./common/Underline";
import AnimatedLogo from "./components/AnimatedLogo";
import { useState } from "react";
import RandomText from "./components/RandomText";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const [isDark, toggleDark] = useCycle(false, true)
  const [isMenu, toggleMenu] = useCycle(false, true)

  const isHome = location.pathname === "/"

  const handleToggleDark = () => {
    toggleDark()
    document.documentElement.classList.toggle('dark');
  }

  return (
    <motion.div 
      className="relative w-screen min-h-screen bg-white dark:bg-darkMain dark:text-darkAccent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
      }}
    >

      <Link to={"/"} className="fixed z-50 top-8 left-8 w-[50px]"><Logo /></Link>
      <div className={`fixed inset-0 z-50 w-full h-full bg-black/50 pointer-events-none duration-300 ${isMenu ? "opacity-100" : "opacity-0"} `} />
      <Navbar visible={isMenu} toggle={() => toggleMenu()} />


      <div className={`fixed inset-0 z-40 p-8 min-h-[800px] h-screen flex flex-col justify-center bg-inherit shadow-right-md duration-500 ${isHome ? "w-[50%]" : "w-[0]"}`}>

        {/* <div className={`absolute left-8 bottom-8 w-[5rem] h-[5rem] border-l-2 border-b-2 ${isHome ? "border-black dark:border-darkAccent" : "border-none"}`} />
        <div className={`absolute right-8 top-8 w-[5rem] h-[5rem] border-r-2 border-t-2 ${isHome ? "border-black dark:border-darkAccent" : "border-none"}`} /> */}
        
        <div className={`flex flex-col tracking-wide leading-[1.25em] duration-300 ${isHome ? "text-[6rem]" : "text-[4rem]"}`}>
          <RandomText text="CHEN" />
          <RandomText text="KAI" />
          <RandomText text="ZHANG" />
        </div>
        
        <div className="mt-8 flex flex-col gap-8 font-light tracking-wide">
          <a href="/documents/chen_kai_zhang_resume.pdf" download>
            <Underline>
              <RandomText text="RESUME" />
            </Underline>
          </a>
          <a href="mailto:ckzhang2674@gmail.com">
            <Underline>
              <RandomText text="REACH OUT" />
            </Underline>
          </a>
          <div onClick={handleToggleDark}>
            <Underline>
              <RandomText text={isDark ? "LIGHT" : "DARK"} />
            </Underline>
          </div>
        </div>
      </div>

      <div className="relative pl-[350px] pr-[100px] min-w-[600px] bg-inherit">
        <Outlet />
      </div>

    </motion.div>
  );
}

export default App;
