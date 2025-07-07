"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Multi-Account Support",
    img: "/analytics.png",
    description:
      "Manage multiple accounts and credit cards in one place for a clearer financial picture.",
  },
  {
    title: "Budget Planning",
    img: "/budget.png",
    description:
      "Create and manage budgets with intelligent, personalized recommendations.",
  },
  {
    title: "Smart Receipt Scanner",
    img: "/scanner.png",
    description:
      "Use AI to instantly scan and log receipt data, automating your transaction tracking.",
  },
];

// Individual step for vertical layout
const StepCard = ({ title, img, description, isLast }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { threshold: 0.75 });

  return (
    <div className="relative flex flex-col items-center text-center mb-20 last:mb-0">
      <div className="relative z-10 cursor-pointer flex flex-col items-center">
        <motion.h3
          ref={titleRef}
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={
            isInView
              ? { scale: 1.05, opacity: 1 }
              : { scale: 0.8, opacity: 0.6 }
          }
          transition={{ duration: 0.6 }}
          className={`bg-[#fafff7] font-semibold text-xl sm:text-2xl ${
            isLast ? "mb-20" : "mb-16"
          }`}
        >
          {title}
        </motion.h3>

        <motion.img
          src={img}
          alt={title}
          initial={{ scale: 0.8, filter: "grayscale(100%)", opacity: 0.6 }}
          animate={
            isInView
              ? {
                  scale:
                    typeof window !== "undefined" &&
                    window.innerWidth < 450
                      ? 2.75
                      : 3,
                  filter: "grayscale(0%)",
                  opacity: 1,
                }
              : {
                  scale: 1.25,
                  filter: "grayscale(100%)",
                  opacity: 0.6,
                }
          }
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          className="rounded-lg w-28 h-20 sm:w-48 sm:h-32 object-contain"
        />
      </div>

      <p
        className={`${
          isLast ? "mt-20" : "mt-16"
        } max-w-xs bg-[#fafff7] text-gray-600 text-sm sm:text-base`}
      >
        {description}
      </p>
    </div>
  );
};

export default function HowItWorksSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width on mount (client-side only)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };
    handleResize(); // Check once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative py-16 bg-[#fafff7] max-w-4xl mx-auto px-6"
      id="features"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="uppercase text-base font-light text-black tracking-wide mb-2">
          How it works
        </p>
        <h2 className="text-5xl font-bold text-black/90 bg-[#fafff7]">
          What to expect as a Centsible member
        </h2>
      </div>

      {/* Vertical line for desktop */}
      {!isMobile && (
        <div className="absolute top-38 h-[60%] left-1/2 transform -translate-x-1/2 border-l-2 border-gray-300 z-0"></div>
      )}

      {/* Content */}
      <div className="relative z-10">
{isMobile ? (
  <div className="space-y-6">
    {steps.map((step, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
        className="bg-white rounded-lg px-4 py-5 shadow-md"
      >
        <h3 className="text-base font-semibold text-black mb-1">
          {step.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
) : (
  <div className="flex flex-col items-center">
    {steps.map(({ title, img, description }, idx) => (
      <StepCard
        key={idx}
        title={title}
        img={img}
        description={description}
        isLast={idx === steps.length - 1}
      />
    ))}
  </div>
)}
      </div>
    </section>
  );
}
