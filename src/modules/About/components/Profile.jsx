import { motion } from "framer-motion"
import Socials from "../../../components/Socials"
import BlobImage from "../../../components/BlobImage"

const Profile = () => {
    return (
        <motion.section 
            id="section2"
            className="relative w-full h-screen flex gap-24 justify-center items-center"  
        >                        
            <div className="relative h-[60%] aspect-[2/3] shadow-xl">
                <div className="absolute -top-10 -left-10 h-[55%] aspect-[2/3] bg-custom rounded-sm" />
                <div className="absolute -bottom-10 -right-10 h-[55%] aspect-[2/3] bg-custom rounded-sm" />
                <BlobImage src="images/profile.jpg" alt="profile-image" />
            </div>
            <div className="relative z-10 flex-1 max-w-[500px] flex flex-col gap-4 text-lg">
                <h1 className="font-bold text-sm text-custom">Bio</h1>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: -50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I am <b>Chen Kai</b>, but I go by <b>Ken</b>. Currently I am a <b>Full Stack Developer</b> at <b>Akamai Technologies</b> where I optimize the team's workflow with digital solutions.
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: -50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Offline, you can catch me enjoying hobbies such as <b>photography</b>, <b>driving</b>, and <b>gaming</b>.
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: -25 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        I also enjoy discovering delicious food throughout the Bay Area so if you have any recommendations, feel free to connect with me and let me in on that sauce!
                    </motion.p>
                </div>
                <Socials />
            </div>

            <div className="absolute bottom-[6%] w-1/2 h-[2px] bg-custom/15" />
        </motion.section>
    )
}

export default Profile