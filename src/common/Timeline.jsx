import { motion, useAnimation, useInView } from "framer-motion"
import { useState, useEffect } from "react"

const Timeline = ({ history }) => {

    let itemsCount = 0

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center">
            <div className="w-[10px] aspect-square bg-blue-400 rounded-full" />
            <div className="absolute w-[4px] h-[80%] bg-blue-400 rounded-sm" /> 
            {Object.keys(history).map((year) => {
                return (
                    <div className="relative flex flex-col justify-center items-center">
                        <p className="absolute text-8xl opacity-5 ">{year}</p>
                        {history[year].map(({ type, start, title, text }) => {
                            const isLeft = itemsCount % 2 === 0
                            itemsCount++
                            return (
                                <div 
                                    key={itemsCount}
                                    className="flex items-center"
                                    style={{ transform: isLeft ? "translateX(-50%)" : "translateX(50%)"}}
                                >
                                    {!isLeft && <div className="h-[4px] w-[100px] bg-blue-400"/>}
                                    <div className="my-4 p-2 w-[450px] flex flex-col gap-1 border-2 border-gray-400 rounded-sm">
                                        <p className="font-bold text-gray-400 text-sm">{type}</p>
                                        <p className="font-semibold text-lg">{title}</p>
                                        <p>{text}</p>
                                    </div>
                                    {isLeft && <div className="h-[4px] w-[100px] bg-blue-400"/>}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}

export default Timeline