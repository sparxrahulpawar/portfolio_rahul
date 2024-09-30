import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

const CountUp = ({ targetNumber, decimalPlaces = 1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, targetNumber, {
      duration: 2, // Duration of the animation
      onUpdate: (value) => setCount(parseFloat(value.toFixed(decimalPlaces))), // Update the count with fixed decimal places
    });

    return controls.stop; // Cleanup when component unmounts
  }, [targetNumber, decimalPlaces]);

  return <motion.h1>{count}+</motion.h1>; // Display the animated count
};

export default CountUp;
