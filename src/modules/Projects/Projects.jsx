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
            className="w-full min-h-screen flex"
        >
            <div className="relative h-screen w-[600px]">
                <div className="absolute bottom-8 left-8 text-xl leading-relaxed">
                    <h1 className="mb-4 text-sm font-bold text-custom">Projects</h1>
                    <p>Here are some of the projects that have led me to become the developer I am today.</p>
                </div>
            </div>
            <div className="p-16 flex flex-col flex-1 h-screen gap-8 items-end overflow-auto">
                {projects.map(({ name, summary, tools, link }) => (
                    <div id={name}>
                        <p className="text-4xl">{name}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )

}

export default Projects