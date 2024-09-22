import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
    const ref = useRef(null);
    const skillsRef = useRef(null)
    const isInView = useInView(skillsRef, { once: true })
    const { scrollYProgress } = useScroll({ target: ref });

    const profileStyle = {
        opacity: useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
    }

    const toolsVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.2 
            }
        }
    }

    const toolVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.5 
            }
        }
    }

    const skills = {
        Languages: ["Python", "JavaScript", "Go", "C", "TypeScript"],
        Frameworks: ["React", "React Native", "ChakraUI", "NodeJS", "TailwindCSS", "Framer", "Redux", "Recoil", "Tensorflow", "PyTorch", "OpenCV", "FastAPI", "Flask"],
        Tools: ["MongoDB", "Postgres", "Cassandra", "ElasticSearch", "SQL", "Google Collab"]
    }

    // Use useEffect to log scrollYProgress value
    useEffect(() => {
        scrollYProgress.on("change", (latest) => {
        console.log("scrollYProgress:", latest); // Print the value to the console
        });
    }, [scrollYProgress]);

    return (
        <motion.div 
            className="relative w-full bg-inherit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
        >
            
            <motion.div style={profileStyle} className="relative h-screen flex justify-center items-center">
                <div className="absolute h-[550px] aspect-[3/4] rounded-sm bg-profile-pic bg-cover" />
                <motion.svg width="440" height="575" className="shadow-xl">
                    <motion.rect
                        x="0"
                        y="0"
                        width="440"
                        height="575"
                        fill="none"
                        className="stroke-black dark:stroke-darkAccent"
                        strokeWidth={6}
                        initial={{ strokeDasharray: 2030, strokeDashoffset: 2030 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </motion.svg>
            </motion.div>
            
            <motion.div className="w-full h-screen flex flex-col justify-center items-center">       
                <div className="max-w-[800px]"> 
                    <motion.section 
                        id="education" 
                        className="w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}    
                    >
                        <h1 className="text-2xl font-medium">Education</h1>
                        <div className="flex gap-8 items-center">
                            <span className="text-lg tracking-[0.1rem]">
                                <h3><b>Bachelor of Science</b> - <i>University of California Santa Cruz</i></h3>
                                <h4 className="font-extralight">Basking School of Engineering and Computer Science</h4>
                                <i className="text-gray-300 dark:text-gray-500">2020 - 2022</i>  
                            </span>
                            <img 
                                className="ml-auto h-[125px] aspect-square"
                                src="images/ucsc_logo.png" 
                                alt="logo" 
                            />
                        </div>
                    </motion.section>

                    <motion.section 
                        id="skills" 
                        className="w-full mt-8" 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}
                    >
                        <h1 className="text-2xl font-medium">Skills</h1>
                        {
                            Object.keys(skills).map((category, i) => (
                                <div key={i}>
                                    <h3 className="mt-4 font-medium">{category}</h3>
                                    <motion.div 
                                        className="my-4 flex flex-wrap gap-2"
                                        ref={skillsRef}
                                        variants={toolsVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : ""}
                                    >
                                        {
                                            skills[category].map((tool, i) => (
                                                <motion.div key={i} variants={toolVariants}>  
                                                    <div className="p-1 pr-4 flex items-center gap-2 border-2 border-gray-200 rounded-sm backdrop-blur-md dark:border-white/25">
                                                        <img 
                                                            className="p-1 h-[35px] border-2 border-inherit rounded-sm dark:bg-white/15"
                                                            src={`images/icons/${tool.replace(/\s+/g, '').toLowerCase()}.png`}
                                                            alt=""
                                                        />
                                                        <p>{tool}</p>
                                                    </div>
                                                </motion.div>
                                            ))
                                        }
                                    </motion.div>
                                    <hr className="py-2 w-[90%] border-gray-200 dark:border-white/25" />
                                </div>
                            ))  
                        }
                    </motion.section>
                </div>
            </motion.div>
        
        </motion.div>
    );
};

export default About;
