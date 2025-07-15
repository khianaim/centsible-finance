"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PieChart, LayoutDashboard, Sparkles } from "lucide-react";

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
      className="relative bg-black text-[#f1fde9] mt-4 mb-4 px-6 py-20 sm:py-24"
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
            We offer everything you need and nothing you don’t. From our dashboard to widgets,
            Centsible is designed for how you actually spend.
          </p>
        </div>

        {/* RIGHT COLUMN: FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Modular Dashboard */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f1fde9] text-black p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <LayoutDashboard className="h-8 w-8 text-[#8aeb30] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Modular Dashboard</h3>
              <p className="text-sm font-light">
                Customize your layout and track what matters most — from daily expenses to net worth.
              </p>
            </div>
          </motion.div>

          {/* Smart Budgeting */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f1fde9] text-black p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-8 w-8 text-[#8aeb30] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Budgeting</h3>
              <p className="text-sm font-light">
                Set intelligent budgets that adapt automatically based on your spending and goals.
              </p>
            </div>
          </motion.div>

          {/* Realtime AI Insights */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f1fde9] text-black p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <PieChart className="h-8 w-8 text-[#8aeb30] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Realtime AI Insights</h3>
              <p className="text-sm font-light">
                Get personalized nudges, warnings, and insights — powered by realtime financial AI.
              </p>
            </div>
          </motion.div>

          {/* On-the-Go Widgets */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#f1fde9] text-black p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#8aeb30] mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h10M4 18h10"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">On-the-Go Widgets</h3>
              <p className="text-sm font-light">
                Get a clear view of your spending from quick-glance widgets — optimized for mobile, always at your fingertips.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

