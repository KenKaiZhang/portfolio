import { motion, useCycle } from "framer-motion"
import RandomText from "../../common/RandomText"
import Underline from "../../common/Underline"
import { useState, useEffect } from "react"

const Landing = () => {

    const [isDark, toggleDark] = useCycle(false, true)
    const [spotIndex, setSpotIndex] = useState(Math.floor(Math.random() * 3))

    const spotImages = ["tower", "chinatown", "typer"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSpotIndex((prev) => (prev + 1) % spotImages.length)
        }, 10000)
        return () => clearInterval(intervalId)
    }, [spotImages.length])

    const handleToggleDark = () => {
        toggleDark()
        document.documentElement.classList.toggle("dark")
    }

    return (
        <div key="landing-page" className="relative w-screen h-screen overflow-hidden">
            <motion.div
                className="absolute z-40 bottom-0 w-screen bg-white"
                initial={{ height: "100vh" }}
                animate={{ height: 0, transition: { duration: 1 }}}
            />
            <motion.div
                className="w-full h-full flex"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.75 }}}
            >
                <div
                    id="landing-left-panel"
                    className="relative pl-8 flex flex-1 flex-col justify-center shadow-lg"
                >
                    <div id="landing-name" className="text-[5rem] font-normal tracking-wide leading-[1.25em]">
                        <RandomText text="CHEN" />
                        <RandomText text="KAI" />
                        <RandomText text="ZHANG" />
                    </div>

                    <div id="landing-actions" className="mt-8 flex flex-col gap-4 font-light tracking-wide">
                        <a href="/documents/chen_kai_zhang_resume.pdf" download>
                            <Underline><RandomText text="RESUME" /></Underline>
                        </a>
                        <a href="mailto:ckzhang2674@gmail.com">
                            <Underline><RandomText text="REACH OUT" /></Underline>
                        </a>
                        <div onClick={handleToggleDark}>
                            <Underline>
                                <RandomText text={isDark ? "LIGHT" : "DARK"} />
                            </Underline>
                        </div>
                    </div>
                </div>
                <div
                    id="landing-right-panel"
                    className="relative h-full flex justify-center flex-1"
                >   
                    {spotImages.map((img, i) => (
                        <img 
                        key={i}
                        alt="spotlight-image" 
                        src={`images/${img}.jpg`}
                        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none duration-300 transition-opacity ${
                            i === spotIndex ? "opacity-100" : "opacity-0"
                        }`} 
                        />
                    ))}
                    <div className="absolute p-2 bottom-4 flex gap-2 bg-black/50 rounded-2xl cursor-pointer opacity-25 duration-300 hover:opacity-100">
                        {spotImages.map((_, i) => (
                            <div 
                                key={i}
                                onClick={() => setSpotIndex(i)}
                                className={`w-[10px] aspect-square rounded-full border-2 ${i === spotIndex ? "bg-white" : ""} duration-300`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Landing