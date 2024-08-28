import { useMemo } from "react"
import { faDiscord, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Socials = () => {

    const links = useMemo(() => (
        [
            { href: "https://www.discord.com", icon: faDiscord },
            { href: "https://www.linkedin.com/in/chen-kai-zhang/", icon: faLinkedinIn },
            { href: "https://instagram.com/ken-kai-zhang", icon: faInstagram },
            { href: "https://github.com/dashboard", icon: faGithub },
        ]
    ), [])

    return (
        <div className="absolute bottom-8 left-8 flex text-lg hover:text-black/25">
            {links.map(({ href, icon }, i) => (
                <a 
                    key={i} 
                    href={href} 
                    target="_blank"
                    rel="noreferrer"
                    className="pr-4 duration-300 hover:text-black"
                >
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    )

}

export default Socials