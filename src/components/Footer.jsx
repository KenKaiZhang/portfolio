import Socials from "./Socials"

const Footer = () => {
    return (
        <div className="px-10 w-screen h-[100px] flex items-center dark:bg-darkMain">
            <div className="flex gap-2 text-gray-400 items-center">    
                <p>Chen Kai Zhang 2024</p>
            </div>
            <div className="ml-auto text-gray-400 scale-90">
                <Socials />
            </div>
        </div>
    )
}

export default Footer