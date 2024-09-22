import { useMemo } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Tools from "../../common/Tools"

const Projects = () => {

    const projects = useMemo(() => (
        [
            {
                name: "Receipt Split",
                summary: "Take a picture of the receipt and quickly calculate how much each person owes.",
                tools: ["Donut OCR", "React Native", "Tensorflow", "FastAPI", "SCSS", "Recoil"],
                link: null
            },
            {
                name: "Desktop Type Test",
                summary: "Monkeytype but for the desktop.",
                tools: ["Electron", "SCSS"],
                link: "https://github.com/KenKaiZhang/desktop-type-test"
            },
            {
                name: "Live Translate",
                summary: "Translate incoming speach to a language of your choice.",
                tools: ["Swift", "Google MLKit", "Apple AIKit"],
                link: "https://github.com/KenKaiZhang/LiveTranslate"

            },
            {
                name: "Tommy Bot",
                summary: "Robot that dispenses and verifys proper medication intake. Won 2nd place overall at the AI-Robot Hackathon.",
                tools: ["Tensorflow", "Keras", "Pytorch", "OpenCV"]
            },
            {
                name: "Resume Builder",
                summary: "Create resumes.",
                tools: ["TypeScript", "MongoDB", "Flask", "Django", "TailwindCSS"],
                link: "https://github.com/KenKaiZhang/resume-builder"
            },
            {
                name: "Live Loop",
                summary: "Web application for students at UCSC allowing them to track the live location of the campus loop buses.",
                tools: ["React", "Flask", "Postgres"],
                link: "https://github.com/KenKaiZhang/LiveLoop"
            }
        ]
    ), [])
    
    return (
        <motion.div 
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
        >
            <div className="p-16 hover:text-black/50 dark:hover:text-white/50">
                {
                    projects.map(({ name, summary, tools, link }) => (
                        <div className="group pb-12 cursor-pointer duration-300 hover:text-black dark:hover:text-darkAccent">
                            <div className="flex items-center gap-4">
                                <h1 className="text-4xl">{name}</h1>
                                {
                                    link && (
                                        <a 
                                            href={link} 
                                            className="flex justify-center items-center opacity-0 duration-300 group-hover:opacity-100"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
                                        </a>
                                    )
                                }
                            </div>
                            <p>{summary}</p>
                            <Tools tools={tools} />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )

}

export default Projects