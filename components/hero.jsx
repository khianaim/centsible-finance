"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [word, setWord] = useState("cents");

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === "cents" ? "sense" : "cents"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-[url('/cf.jpg')] bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="relative z-10 flex h-full flex-col justify-start items-center text-center px-4 pt-[15vh] sm:items-start sm:justify-end sm:text-left sm:px-6 md:px-10 lg:px-16 sm:pb-12">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-[#f1fde9] mb-8">
              Finally, finance that makes{" "}
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-block text-[#6ab326] ml-1"
                  >
                    {word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-xl sm:text-lg md:text-xl text-[#f1fde9] leading-relaxed font-light max-w-2xl">
              Centsible is built with users in mind. Simplify budgeting, automate insights, and unlock financial freedom in one smart dashboard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
