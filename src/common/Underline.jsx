import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Underline = ({ children }) => {
  const ref = useRef(null);
  const [childrenWidth, setChildrenWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setChildrenWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ display: 'inline-block' }}
    >
      <label 
        ref={ref} 
        className="w-min h-min cursor-pointer"
      >
        {children}
      </label>
      <svg 
        width={childrenWidth} 
        height="5" 
        viewBox={`0 0 ${childrenWidth} 5`}
        className="stroke-black dark:stroke-darkAccent"
      >
        <motion.line
          x1={childrenWidth/2}
          y1="5"
          x2={0}
          y2="5"
          strokeWidth={2}
          variants={{
            rest: { pathLength: 0 },
            hover: { pathLength: 1 },
          }}
          transition={{ duration: 0.25 }}
        />
        <motion.line
          x1={childrenWidth/2}
          y1="5"
          x2={childrenWidth}
          y2="5"
          strokeWidth={2}
          variants={{
            rest: { pathLength: 0 },
            hover: { pathLength: 1 },
          }}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </motion.div>
  );
};

export default Underline;
