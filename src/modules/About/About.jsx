import { motion, useScroll, useTransform } from "framer-motion"
import RandomText from "../../common/RandomText"
import { useState, useEffect } from "react"
import BlobImage from "./components/BlobImage";
import Socials from "../../components/Socials";
import Tools from "../../common/Tools";
import { Education, Experience  } from "./components/History";
import Sphere from "../../components/Sphere";
import { Canvas } from '@react-three/fiber';
import CameraController from "../../components/Camera";

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
    
    const landingTransform = {
        translateY: useTransform(scrollYProgress, [0, 0.5], [0, 500]),
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
    }

    const infoTransform = {
        translateY: useTransform(scrollYProgress, [0, 1], [100, 0])
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setName(prev => (prev + 1) % nameOptions.length)
            setTitle(prev => (prev + 1) % titleOptions.length)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [nameOptions.length, titleOptions.length])


    return (
        <div key="about-page" className="w-full min-h-screen bg-inherit">
            <motion.div 
                className="absolute z-40 left-0 h-screen bg-inherit shadow-md"
                initial={{ width: "100vw" }}
                animate={{ width: 0, transition: { duration: 0.5 }}}
            />
            <motion.div
                className="w-full h-full flex flex-col items-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.75 }}}
            >
                <motion.section 
                    id="section1"
                    className="relative z-10 px-8 w-full max-w-[850px] h-screen flex justify-center items-center "
                    style={landingTransform}
                >
                    <div className="z-20 w-full h-full flex flex-col gap-4 justify-center items-center text-2xl">
                        <span className="w-full flex gap-2">
                            Hi, I'm <RandomText text={nameOptions[name]} />
                        </span>
                        <span className="flex gap-2 text-5xl font-extrabold">
                            a <RandomText text={titleOptions[title]} />
                        </span>
                        <span className="w-full text-right">
                            based in California
                        </span>
                    </div>
                    <div className="absolute z-10 w-screen h-screen flex justify-center items-center opacity-50">
                        <Canvas classname="w-full h-full">
                            <CameraController />
                            <ambientLight />
                            <Sphere />
                        </Canvas>
                    </div>
                </motion.section>

                <motion.div
                    className="relative z-20 w-full h-max bg-inherit "
                    style={{
                        ...infoTransform,
                        boxShadow: "0 -15px 25px 5px rgb(0,0,0,0.1)"
                    }} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    <motion.section 
                        id="section2"
                        className="relative w-full h-screen flex gap-24 justify-center items-center"  
                    >                        
                        <div className="relative h-[60%] aspect-[2/3] shadow-xl">
                            <div className="absolute -top-10 -left-10 h-[50%] aspect-[2/3] bg-purple-500 rounded-sm" />
                            <div className="absolute -bottom-10 -right-10 h-[50%] aspect-[2/3] bg-blue-500 rounded-sm" />
                            <BlobImage src="images/profile.jpg" alt="profile-image" />
                        </div>
                        <div className="relative z-10 max-w-[450px] flex flex-col gap-4 text-lg">
                            <h1 className="font-bold text-gray-400 text-sm">Bio</h1>
                            <div className="overflow-hidden">
                                <motion.p
                                    initial={{ y: -50 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    Hi, I am <b>Chen Kai</b>, but I go by <b>Ken</b>. Currently I am a <b>Full Stack Developer</b> at <b>Akamai Technologies</b> where I optimize the team's workflow with digital solutions.
                                </motion.p>
                            </div>
                            <div className="overflow-hidden">
                                <motion.p
                                    initial={{ y: -50 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    Offline, you can catch me enjoying hobbies such as <b>photography</b>, <b>driving</b>, and <b>gaming</b>.
                                </motion.p>
                            </div>
                            <div className="overflow-hidden">
                                <motion.p
                                    initial={{ y: -25 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    I also enjoy discovering delicious food throughout the Bay Area so if you have any recommendations, feel free to connect with me and let me in on that sauce!
                                </motion.p>
                            </div>
                            <Socials />
                        </div>

                        <div className="absolute bottom-[6%] w-1/2 h-[2px] bg-gray-200 dark:bg-gray-700" />
                    </motion.section>
                    <motion.section
                        id="section3"
                        className="pb-16 relative w-full min-h-screen flex justify-center items-center"
                    >
                        <div className="p-4 w-full max-w-[1000px] h-[80%] bg-gray-100 rounded-md dark:bg-black/15">
                            <div className="w-full flex">
                                <Education />
                                <Experience />
                            </div>
                            <div className="p-6 flex-1 rounded-sm ">
                                <p className="text-sm font-bold text-gray-400">Skills</p>
                                <p className="pt-6 pb-2 text-md font-bold text-gray-600">Languages</p>
                                <Tools tools={["Python", "JavaScript", "TypeScript", "Bash", "Go", "C", "HTML", "CSS", "SCSS", "Swift"]} />
                                <p className="pt-6 pb-2 text-md font-bold text-gray-600">Frameworks</p>
                                <Tools tools={["React", "React Native", "Redux", "Recoil", "ChakraUI", "Electron", "FastAPI", "Flask", "Framer", "PyTorch", "Tensorflow", "Keras", "OpenCV"]} />
                                <p className="pt-6 pb-2 text-md font-bold text-gray-600">Tools</p>
                                <Tools tools={["Git", "Docker", "ElasticSearch", "Postgres", "MongoDB", "NodeJS", "Google Collab", "Apple AIKit", "GoogleMLKit", "Firebase"]} />
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About