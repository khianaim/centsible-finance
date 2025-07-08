"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 440);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <section
  ref={sectionRef}
  className="relative bg-black text-[#f1fde9] mt-2 mb-12 px-6 py-24 sm:py-32 flex items-center"
  id="features"
>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-4xl md:text-5xl text-[#8aeb30] font-bold mb-4">
            Why be Centsible?
          </h2>
          <p className="text-lg font-light mb-10 max-w-md">
            We offer everything you need and nothing you don't. From our dashboard to widgets,
            Centsible is designed for how you actually spend.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 items-center justify-center">
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-black w-full">
            <div className="bg-[#f1fde9] rounded-xl py-6 px-4">
              <p className="text-3xl font-bold">150K+</p>
              <p className="text-sm font-light">Active Members</p>
            </div>
            <div className="bg-[#f1fde9] rounded-xl py-6 px-4">
              <p className="text-3xl font-bold">$1.2M</p>
              <p className="text-sm font-light">in Managed Budgets</p>
            </div>
            <div className="bg-[#f1fde9] rounded-xl py-6 px-4">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm font-light">Savings Increase</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
