import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Underline = ({ label }) => {
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ display: 'inline-block' }}
    >
      <label ref={labelRef} className="cursor-pointer">{label}</label>
      <svg width={labelWidth} height="5" viewBox={`0 0 ${labelWidth} 5`}>
        <motion.line
          x1={labelWidth/2}
          y1="5"
          x2={0}
          y2="5"
          stroke="black"
          strokeWidth={2}
          variants={{
            rest: { pathLength: 0 },
            hover: { pathLength: 1 },
          }}
          transition={{ duration: 0.25 }}
        />
        <motion.line
          x1={labelWidth/2}
          y1="5"
          x2={labelWidth}
          y2="5"
          stroke="black"
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
