import { faExpand, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useCycle } from "framer-motion"

const Info = ({ title, subTitle, date, details }) => {

    const [isExpanded, toggleExpanded] = useCycle(false, true)

    return (
        <button 
            className={`group relative my-2 p-2 pb-4 flex flex-col flex-1 gap-1 rounded-sm duration-300 overflow-hidden hover:bg-custom/15 ${isExpanded && "bg-custom/15"}`}
            onClick={toggleExpanded}
        >   
            <p className="text-3xl font-normal">{title}</p>
            <p className="text-lg text-gray-500 font-normal" >{subTitle}</p>
            <p className="text-custom">{date}</p>
            <button 
                className="absolute bottom-1 right-1 h-[25px] aspect-square flex justify-center items-center opacity-0 duration-300 group-hover:opacity-100"
            >
                <FontAwesomeIcon icon={isExpanded ? faXmark : faExpand} />
            </button>
            <motion.div 
                className="my-2 px-4 flex flex-col gap-2 text-left overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: isExpanded ? "auto" : "0" }}
                transition={{ duration: 0.3 }}
            >
                {details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                ))}
            </motion.div>
            <div className="absolute top-2 right-2 h-[100px] w-[5px] bg-custom" />
        </button>
    )

}

const Experience = () => {

    const education = [
        {
            school: "Monte Vista High School",
            degree: "High School Diploma",
            date: "2016 - 2020",
            details: ["I graduated :)"]
        },
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
        <motion.section
            id="section3"
            className="pb-16 relative w-full flex justify-center items-center"
        >
            <div className="p-4 w-full max-w-[1000px] h-[80%] rounded-md ">
                <div className="w-full">
                    <div className="p-4 flex-1 rounded-sm">
                        <h1 className="px-2 text-sm font-bold text-custom">Education</h1>
                        <div className="flex gap-8">
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
                    </div>
                    <div className="p-4 flex-1 rounded-sm">
                        <h1 className="px-2 text-sm font-bold text-custom">Experience</h1>
                        <div className="flex gap-8">
                            {experience.map(({ company, position, date, details }, i) => (
                                <Info 
                                    key={i}
                                    title={company} 
                                    subTitle={position} 
                                    date={date} 
                                    details={details}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[6%] w-1/2 h-[2px] bg-custom/15" />
        </motion.section>
    )
}

export default Experience
