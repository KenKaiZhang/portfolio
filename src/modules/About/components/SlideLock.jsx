import { motion } from "framer-motion"

const SlideLock = () => {

    const images = ["blueline", "chinatown", "graduation", "typer", "tower", "yaya", "profile", ""]

    const slideVariants = {
        initial: { x: "100%"},
        animate: { x: 0, transition: { duration: 1 }}
    }

    return (
        <motion.div
            className="w-full h-screen flex items-center justify-end"
            variants={slideVariants}
            initial="initial"
            animate="animate"
        >
            {images.map((img) => {
                return (
                    <div className="pl-8 w-[33%] aspect-[2/3] flex-shrink-0">
                        {
                            img !== ""
                            ?   <img 
                                    alt={img}
                                    src={`images/${img}.jpg`}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            : null
                        }

                    </div>
                )
            })}
        </motion.div>
    )
}

export default SlideLock