"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion"

const testimonials = [
  {
    quote: "I've actually started saving money and being more Centisble (get it!?). I absolutely love it!",
    name: "Laura Jones",
  },
  {
    quote: "Going on vacation for the 3rd time this month all thanks to Centsible. Budgets just got better, super intuitive to use.",
    name: "Patrick Kerri",
  },
  {
    quote: "Just starting but Centsible has helped me save more than I thought possible. I recommend it to ALL my friends and they have an amazing referral program.",
    name: "Agnes Richards",
  },
  {
    quote: "Centsible made managing my expenses simple and stress-free. The AI receipt scanner is a tool I didn't even know I needed.",
    name: "Bob Mills",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 const [word, setWord] = useState("cents");

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === "cents" ? "sense" : "cents"));
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

 
  return (
    <section className=" relative mt-14 pb-2 px-4 bg-[#fafff7]">
      <div className="container mx-auto flex flex-col items-center text-center space-y-10">
        {/* Top Text Section */}
       <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl px-4 mt-4"
    >
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-black/90 mt-2 mb-4">
        Where your money makes{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-flex justify-center items-center text-[#8aeb30] w-[80px] sm:w-[130px] text-center"
          >
          {word}
        </motion.span>
        </AnimatePresence>
      </h1>

      <p className="text-base sm:text-base md:text-lg text-black leading-relaxed max-w-2xl mx-auto font-light mb-8">
       Smarter. Simpler. Centsible.
      </p>

      <Link href="/dashboard" className="inline-block">
        <Button
          size="lg"
          className="bg-black/90 text-white rounded-full px-8 sm:px-10 py-2 sm:py-4 mb-4 text-base font-medium"
        >
          Start Saving
        </Button>
      </Link>
    </motion.div>

        {/* Metrics + Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10">
          {/* Middle: Two stacked metric cards */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-black rounded-xl p-6 shadow-md flex flex-col justify-center h-[111px]"
            >
              <h3 className="text-2xl font-bold text-left text-black/90"> 5K+</h3>
              <p className="text-sm mt-2 text-left font-light">Users budgeting their financial goals with us.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-black rounded-xl p-6 shadow-md flex flex-col justify-center h-[111px]">
              <h3 className="text-2xl font-bold text-left text-black/90">1.2M+</h3>
              <p className="text-sm mt-2 text-left font-light">Transactions analyzed with Centsible AI.</p>
            </motion.div>
          
          </div>

          {/* Right: Testimonial */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-auto min-h-[280px] sm:min-h-[220px] md:h-[245px] w-full md:col-span-2"
          >
            <div className="relative flex-grow flex flex-col justify-start overflow-hidden min-h-[140px] sm:min-h-[200px]">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 flex flex-col px-2 sm:px-6 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{ transitionDuration: `700ms` }}
                >
                  <div className="text-left text-3xl sm:text-4xl text-black/90 leading-none select-none">“</div>
                  <blockquote className="text-gray-800 text-base sm:text-lg text-left font-light leading-relaxed mt-2 overflow-auto max-h-[130px]">
                    {item.quote}
                  </blockquote>
                  <div className="font-semibold text-sm sm:text-base text-black text-left mt-2 truncate">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="-mt-6 sm:-mt-12 flex justify-center items-center space-x-1 sm:space-x-2 text-yellow-500 text-xs sm:text-sm border-t border-gray-200 pt-2 sm:pt-3">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <span className="text-black font-light text-sm sm:text-base truncate">4.75 / 5 User Rating</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
