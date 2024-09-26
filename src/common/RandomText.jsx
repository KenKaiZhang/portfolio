import { useEffect, useState } from "react";

const RandomText = ({ text }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [resultText, setResultText] = useState(text);
    const [, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
        setResultText(letters[Math.floor(Math.random() * 26)]);

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < text.length) {
                    const nextIndex = prevIndex + 1;
                    const otherChars = Array.from(
                        { length: text.length - nextIndex },
                        (i) => text[i] === " " ? " " : letters[Math.floor(Math.random() * 26)]
                    ).join("");
                    setResultText(text.substring(0, nextIndex) + otherChars);
                    return nextIndex;
                } else {
                    clearInterval(timer);
                    return prevIndex;
                }
            });
        }, 70);

        return () => clearInterval(timer);
    }, [text, letters]);

    return <p>{resultText}</p>;
};

export default RandomText;
