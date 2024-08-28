import { motion, useCycle } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "./common/Logo";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";
import Underline from "./common/Underline";

const App = () => {
  const location = useLocation();
  const [isDark, toggleDark] = useCycle(false, true)
  const [isMenu, toggleMenu] = useCycle(false, true)

  const isHome = location.pathname === "/"

  const handleToggleDark = () => {
    toggleDark()
    document.documentElement.classList.toggle('dark');
  }

  return (
    <motion.div 
      initial={false}
      animate={isMenu ? "open" : "closed"}
      className="relative w-screen h-screen flex justify-center items-center"
    >
      <div className={`fixed inset-0 w-full h-full bg-black/50 pointer-events-none z-50 duration-300 ${isMenu ? "opacity-100" : "opacity-0"}`} />

      <div className={`fixed inset-0 z-40 p-8 h-full shadow-right-md flex flex-col bg-white justify-center duration-300 ${isHome ? "w-[80%]" : "w-[350px]"}`}>

        <div className={`absolute left-8 bottom-8 w-[5rem] h-[5rem] border-l-2 border-b-2 ${isHome ? "border-black" : "border-none"}`} />
        <div className={`absolute right-8 top-8 w-[5rem] h-[5rem] border-r-2 border-t-2 ${isHome ? "border-black" : "border-none"}`} />

        <div className="absolute w-[50px] top-8"><Logo /></div>

        <div className="text-[4rem] font-[400] tracking-[0.25em] leading-[1.25em]">
          <p>CHEN</p>
          <p>KAI</p>
          <p>ZHANG</p>
        </div>
        <div className="mt-8 flex flex-col gap-8 text-[1em] tracking-[0.25em]">
          <Underline label={"RESUME"} />
          <a href="mailto:ckzhang2674@gmail.com">
            <Underline label={"REACH OUT"} />
          </a>
          <div onClick={handleToggleDark}>
            <Underline label={isDark ? "LIGHT" : "DARK"} />
          </div>
        </div>
        <Socials />
      </div>

      <div className="pl-[350px] pr-[100px] flex flex-1 min-w-[600px]">
        <Outlet />
      </div>

      <Navbar visible={isMenu} toggle={() => toggleMenu()} />
    </motion.div>
  );
}

export default App;
