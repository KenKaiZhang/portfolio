import { motion } from "framer-motion"

const Tools = ({ tools, visible=true }) => {

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

    return (
        <motion.div
            className="flex flex-wrap gap-2"
            variants={toolsVariants}
            initial="hidden"
            animate={visible ? "visible" : ""}
        >
            {
                tools.map((tool, i) => (
                    <motion.div key={i} variants={toolVariants}>
                        <div className="p-1 pr-4 flex items-center gap-2 border-2 border-gray-300 rounded-sm backdrop-blur-md dark:border-white/25">
                            <img 
                                className="p-1 h-[30px] border-2 border-inherit dark:bg-white/15"
                                src={`images/icons/${tool.replace(/\s+/g, '').toLowerCase()}.png`}
                                alt=""
                            />
                            <p className="text-xs">{tool}</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>   
    )
}

export default Tools