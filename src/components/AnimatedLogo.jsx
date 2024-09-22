import { motion } from 'framer-motion';

const AnimatedLogo = ({ setLoading }) => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: i => {
      const delay = i * 0.25;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 0.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.svg w="45" h="45" viewBox="0 0 600 600" fill="none" initial="hidden" animate="visible" onAnimationComplete={() => setLoading(false)}>
      <motion.path d="M172 131L280.671 97" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={0} />
      <motion.path d="M281 97 V177" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={1} />
      <motion.path d="M280.671 177L172 211" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" variants={draw} custom={2} />
      <motion.path d="M172 211L172 291" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={3} />
      <motion.path d="M172 291L280.671 257" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" variants={draw} custom={4} />
      <motion.path d="M281 257L281 311" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={5} />
      <motion.path d="M281 365L281 499" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={6} />
      <motion.path d="M281 499L175 370" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={7} />

      <motion.path d="M175 369L433 286" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={8} />

      <motion.path d="M429.673 130.993L321 97" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={0} />
      <motion.path d="M319 97L321 295" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={1} />
      <motion.path d="M321 171L406.412 197.717" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={2} />
      <motion.path d="M321 211L406.412 237.717" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={3} />
      <motion.path d="M342 342L442.638 471.031" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={4} />
      <motion.path d="M321 348L321 499" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={5} />
      <motion.path d="M321 499.461L429.901 370" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" strokeLinecap="round" variants={draw} custom={6} />

      <motion.circle cx="300.5" cy="300.5" r="262.5" className="stroke-black dark:stroke-darkAccent" strokeWidth="15" variants={draw} custom={9} />
    </motion.svg>
  );
};

export default AnimatedLogo;
