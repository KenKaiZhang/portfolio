import { useMemo } from "react"
import { faDiscord, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Socials = () => {

    const links = useMemo(() => (
        [
            { href: "https://www.discordapp.com/users/362375670518644747", icon: faDiscord },
            { href: "https://www.linkedin.com/in/chen-kai-zhang/", icon: faLinkedinIn },
            { href: "https://www.instagram.com/ken_kai_zhang/", icon: faInstagram },
            { href: "https://github.com/KenKaiZhang", icon: faGithub },
        ]
    ), [])

    return (
        <div className="flex gap-4 text-xl hover:text-black/50 dark:hover:text-white/50">
            {links.map(({ href, icon }, i) => (
                <a 
                    key={i} 
                    href={href} 
                    target="_blank"
                    rel="noreferrer"
                    className="pr-4 duration-300 hover:text-custom"
                >
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    )

}

export default Socials