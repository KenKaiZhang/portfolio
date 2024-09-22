import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const SimpleGridImages = () => {

    const profileImgRef = useRef(null)
    const [svgDim, setSVGDim] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateSVGDim = () => {
            if (profileImgRef.current) {
                const { width, height } = profileImgRef.current.getBoundingClientRect()
                setSVGDim({ width, height });
            }
        }
        updateSVGDim()
        window.addEventListener('resize', updateSVGDim);
        return () => window.removeEventListener('resize', updateSVGDim);
    }, [])

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 }
        }
    }

    const imageContainer = {
        hidden: { opacity: 0, scale: 0.75},
        visible: { opacity: 0.8, scale: 1, transition: { duration: 1 } }
    }

    return (
        <motion.div 
            className="relative grid grid-cols-2 overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {
                [["yaya", "hill"], ["bridge", "tower"]].map((column, i) => (
                    <div key={i} className="w-full h-screen flex flex-col">
                        {column.map((img, j) => {
                            const height = i === 0
                                ? j % 2 === 0 ? "h-[65%]" : "h-[35%]"
                                : j % 2 === 0 ? "h-[35%]" : "h-[65%]"
                            return (
                                <motion.div 
                                    key={img} 
                                    className={`p-2 w-full ${height}`}
                                    variants={imageContainer}
                                >
                                    <img
                                        alt="img"
                                        src={`images/${img}.jpg`}
                                        className="w-full h-full object-cover object-left-top rounded-sm" 
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                ))
            }
            <div className="absolute p-4 inset-0 w-full h-full flex justify-center items-center">
                <img 
                    ref={profileImgRef}
                    alt="profile" 
                    src="images/profile.jpg" 
                    className="p-2 h-[60%] aspect-[2/3] object-cover rounded-sm bg-white shadow-xl"
                /> 
                <motion.svg width={svgDim.width} height={svgDim.height} className="absolute">
                    <motion.rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                        className="stroke-black dark:stroke-darkAccent"
                        strokeWidth={5}
                        initial={{ strokeDasharray: 2030, strokeDashoffset: 2030 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </motion.svg>
            </div>
        </motion.div>
    )
}

export default SimpleGridImages