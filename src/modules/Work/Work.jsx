import { motion } from "framer-motion"
import Tools from "../../common/Tools"

const Work = () => {

    const work = {
        2024: [
            {
                position: "Full Stack Developer",
                company: "Akamai",
                summary: "Designed and develop an all in one platform for other Akamai engineers to monitor, modify, and explore team resources.",
                date: ["Jan 2024", "Present"],
                tools: ["JavaScript", "Python", "React", "Chakra UI", "Flask", "Docker", "Git", "Cassandra", "Postgres", "ElasticSearch"]
            },
        ],
        2023: [],
        2022: [
            {
                position: "Software QA Engineer",
                company: "Dolby Laboratories",
                summary: "Automated the testing workflow for increased efficiency and decreased errors.",
                date: ["Jul 2022", "Jul 2023"],
                tools: ["Python", "Bash", "Git", "HTML", "CSS"]
            }
        ],
    }

    return (
        <div className="relative w-full h-screen">
            {
                Object.keys(work).map((year) => (
                    <div key={year} className="relative p-16 min-h-[200px] z-20">
                        <motion.div 
                            className="absolute -bottom-10 -right-10 font-bold text-gray-100 text-[8em] tracking-[0.25em]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, translateX: 0 },
                                hidden: { opacity: 0, translateX: "50%" }
                            }}
                        >
                                {year}
                        </motion.div>
                        
                        <motion.div 
                            className="max-w-[800px] relative z-30"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, translateX: 0 },
                                hidden: { opacity: 0, translateX: "-50%" }
                            }}
                        >
                            {
                                work[year].map(({ position, company, summary, date, tools }) => (
                                    <div>
                                        <p className="text-[1.75em]">{position}</p>
                                        <i className="font-bold">{company}</i>
                                        <p className="text-[1em]">{`${date[0]} - ${date[1]}`}</p>
                                        <p className="mt-4">{summary}</p>
                                        <Tools tools={tools} />
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                ))
            }
        </div>
    )
}

export default Work