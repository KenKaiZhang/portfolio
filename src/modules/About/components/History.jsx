import { faExpand, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useCycle } from "framer-motion"

const Info = ({ title, subTitle, date, details }) => {

    const [isExpanded, toggleExpanded] = useCycle(false, true)

    return (
        <button 
            className="group relative my-2 p-2 flex flex-col rounded-sm duration-300 overflow-hidden hover:bg-black/10 dark:hover:bg-white/5"
            style={{ background: isExpanded ? "#0000000D" : "" }}
            onClick={toggleExpanded}
        >
            <p className="text-2xl font-normal">{title}</p>
            <p className="text-gray-500 font-normal" >{subTitle}</p>
            <p className="text-sm text-gray-400">{date}</p>
            <button 
                className="absolute bottom-1 right-1 h-[25px] aspect-square flex justify-center items-center opacity-0 duration-300 group-hover:opacity-100"
            >
                <FontAwesomeIcon icon={isExpanded ? faXmark : faExpand} />
            </button>
            <motion.div 
                className="my-2 px-4 flex flex-col gap-2 text-left overflow-hidden text-sm"
                initial={{ height: 0 }}
                animate={{ height: isExpanded ? "auto" : "0" }}
                transition={{ duration: 0.3 }}
            >
                {details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                ))}
            </motion.div>
        </button>
    )

}

export const Education = () => {

    const education = [
        {
            school: "UC Santa Cruz",
            degree: "Bachelors of Science - Computer Science",
            date: "2020 - 2022",
            details: [
                "CSE 101: Data Structures and Algorithms",
                "CSE 102: Algorithm Analysis",
                "CSE 103: Computational Models",
                "CSE 112: Comparative Programing Languages",
                "CSE 115A: Software Engineering",
                "CSE 120: Computer Architecture",
                "CSE 130: Principle Computer Systems Design",
                "CSE 143: Natural Language Processing",
                "CSE 144: Applied Machine Learning",
                "CSE 150: Computer Networks",
            ]
        }
    ]

    return (
        <div className="p-4 flex-1 rounded-sm">
            <h1 className="px-2 text-sm font-bold text-gray-400">Education</h1>
            { education.map(({ school, degree, date, details}, i) => (
                <Info 
                    key={i}
                    title={school}
                    subTitle={degree}
                    date={date}
                    details={details}
                />
            ))}
        </div>
    )
}

export const Experience = () => {

    const experience = [
        {
            company: "Dolby Laboratories", 
            position: "Software Engineer Intern", 
            date: "2022 - 2023",
            details: [
                "12 month internship where I transistioned the team's manual testing process to a more automated solution. I leveraged Python to develop scripts that interfaced with internal testing hardware, streamlining the testing procedures. Built an intuitive UI using HTML, CSS, and JavaScript allowing team members to easily run these automated scripts, improving the efficiency and reliability of the testing process."
            ]
        },
        { 
            company: "Akamai Technologies", 
            position: "Full Stack Developer", 
            date: "2024 - Present",
            details: [
                "Contribute and own the CSC platform, an internal digital solution designed to optimize workflow across teams in my department. Each tool wihtin the platform is customized to address the specific needs and requirements of individual teams, requiring close collaboration with cross-functional teams and continuous learning of new tools and technologies."
            ]
        },
    ]

    return (
        <div className="p-4 flex-1 rounded-sm">
            <h1 className="px-2 text-sm font-bold text-gray-400">Experience</h1>
            { experience.map(({ company, position, date, details }, i) => (
                <Info 
                    key={i}
                    title={company} 
                    subTitle={position} 
                    date={date} 
                    details={details}
                />
            ))}
        </div>
    )
}
