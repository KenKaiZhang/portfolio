import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import RandomText from "../../common/RandomText"
import Sphere from "../../components/Sphere";
import Experience from "./components/Experience";
import CameraController from "../../components/Camera";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const About = () => {

    const { scrollYProgress } = useScroll();

    const [name, setName] = useState(0)
    const [title, setTitle] = useState(0)

    const nameOptions = ["KEN ZHANG", "CHEN KAI ZHANG",  "張宸愷"]
    const titleOptions = [
        "SOFTWARE ENGINEER",
        "GAMER",
        "PHOTOGRAPHER",
    ]
    
    // const landingTransform = {
    //     translateY: useTransform(scrollYProgress, [0, 0.5], [0, 500]),
    //     opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
    // }

    // const infoTransform = {
    //     translateY: useTransform(scrollYProgress, [0, 1], [100, 0])
    // }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setName(prev => (prev + 1) % nameOptions.length)
            setTitle(prev => (prev + 1) % titleOptions.length)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [nameOptions.length, titleOptions.length])


    return (
        <motion.div 
            id="about-page" 
            className="w-full min-h-screen bg-inherit"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.75 }}}
        >
            <motion.div className="fixed w-screen h-screen flex justify-center items-center">
                <div className="w-full max-w-[800px] h-full flex flex-col gap-4 justify-center items-center text-2xl">
                    <span className="w-full flex gap-2">
                        Hi, I'm <RandomText text={nameOptions[name]} />
                    </span>
                    <span className="flex gap-2 text-5xl font-extrabold text-custom">
                        a <RandomText text={titleOptions[title]} />
                    </span>
                    <span className="w-full text-right">
                        based in California
                    </span>
                </div>
                <div className="absolute inset-0 w-screen h-screen flex justify-center items-center">
                    <Canvas className="relative w-full h-full">
                        <CameraController />
                        <ambientLight />
                        <Sphere />
                    </Canvas>
                </div>
            </motion.div>
            <div className="relative z-10 w-screen h-screen" />
            <motion.div
                className="relative z-10 w-full h-max bg-darkMain"
                style={{
                    boxShadow: "0 -20px 25px 25px rgb(0,0,0,0.2)"
                }} 
            >
                <Profile />
                <Experience />
                <Projects />
            </motion.div>
        </motion.div>
    )
}

export default About