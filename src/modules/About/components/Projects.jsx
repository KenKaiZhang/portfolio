import { motion } from "framer-motion"
import Underline from "../../../common/Underline";
import { useMemo, useState } from "react";
import Tools from "../../../common/Tools";

const Projects = () => {

    const [selectedTab, setSelectedTab] = useState("Web")

    const options = ["Web", "Mobile", "AI"]

    const info = useMemo(() => (
        {
            "Mobile": {
                "Languages": ["JavaScript", "TypeScript", "Python", "CSS", "Swift"],
                "Frameworks": ["React Native", "TailwindCSS", "SCSS", "FastAPI"],
                "Tools": ["Git", "Docker", "MongoDB", "Apple AIKit", "GoogleMLKit"],
                "projects": [
                    {
                        name: "Receipt Split",
                        summary: "Take a picture of the receipt and quickly calculate how much each person owes.",
                        tools: ["Donut OCR", "React Native", "Tensorflow", "FastAPI", "SCSS", "Recoil"],
                        link: null
                    },
                    {
                        name: "Live Translate",
                        summary: "Translate incoming speach to a language of your choice.",
                        tools: ["Swift", "Google MLKit", "Apple AIKit"],
                        link: "https://github.com/KenKaiZhang/LiveTranslate"
        
                    },
                ]
            },
            "Web": {
                "Languages": ["Python", "JavaScript", "TypeScript", "CSS", "Go", "HTML", "CSS"],
                "Frameworks": ["React", "Redux", "Recoil", "ChakraUI", "Framer", "FastAPI", "Flask"],
                "Tools": ["Git", "Docker", "MongoDB", "Postgres", "NodeJS", "Firebase"],
                "projects": [
                    {
                        name: "Desktop Type Test",
                        summary: "Monkeytype but for the desktop.",
                        tools: ["Electron", "SCSS"],
                        link: "https://github.com/KenKaiZhang/desktop-type-test"
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
            },
            "AI": {
                "Languages": ["Python"],
                "Frameworks": ["PyTorch", "Tensorflow", "OpenCV"],
                "Tools": ["Git", "Google Collab"],
                "projects": [
                    {
                        name: "Tommy Bot",
                        summary: "Robot that dispenses and verifys proper medication intake. Won 2nd place overall at the AI-Robot Hackathon.",
                        tools: ["Tensorflow", "Keras", "Pytorch", "OpenCV"]
                    },
                ]
            }
        }
    ), []) 

    const selectedInfo = useMemo(() => info[selectedTab], [info, selectedTab])

    return (
        <motion.section
            id="section-3"
            className="relative w-full flex flex-col items-center"
        >
            <nav className="p-4 flex gap-4 text-xl font-normal tracking-[0.25rem]">
                {options.map((option) => (
                    <div 
                        key={option}
                        className={`p-2 w-[150px] flex justify-center items-center duration-300 ${option === selectedTab && "text-custom"}`}
                        onClick={() => setSelectedTab(option)}
                    >
                        <Underline><p>{option}</p></Underline>
                    </div>
                ))}
            </nav>
            <div key={selectedTab} className="w-[70%]">
                <div className="p-4 flex flex-col gap-4 bg-custom/15 rounded-sm">
                    <h1 className="text-sm font-bold text-custom">Skills</h1>
                    {["Languages", "Frameworks", "Tools"].map((sub) => {
                        return (
                            <div key={sub}>
                                <p className="mb-2 text-gray-500 font-bold">{sub}</p>
                                <div className="flex">
                                    <Tools tools={selectedInfo[sub]} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className="p-4 text-sm font-bold text-custom">Projects</h1>
                <div>
                    {selectedInfo["projects"].map(({name, summary, tools}, i) => (
                        <div key={i}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )

}

export default Projects