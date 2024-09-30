import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const controls = useAnimation();

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const updateCursor = (e) => {
      controls.start({
        x: e.clientX - 10, // Offset to center the cursor
        y: e.clientY - 10,
        transition: { type: "spring", stiffness: 800, damping: 10 }, // Adjust stiffness and damping for smoother movement
      });
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => updateCursor(e));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  return (
    <motion.div
      id="custom-cursor"
      className="custom-cursor"
      animate={controls}
    />
  );
};

export default CustomCursor;
