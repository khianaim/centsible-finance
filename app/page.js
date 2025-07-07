"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { featuresData } from "@/data/landing";
import HowItWorksSection from "@/components/stepscard";

const LandingPage = () => {
  const [yearly, setYearly] = useState(false);

  const togglePricing = () => setYearly(!yearly);

  const pricingPlans = [
    {
      name: "Basic",
      price: yearly ? "Free" : "Free",
      features: [
        { title: "2 Accounts", description: "Perfect for personal use" },
        { title: "Basic Support", description: "Email support within 24h" },
        { title: "Monthly Email Notifications", description: "Stay updated with alerts" },
      ],
      description: "Ideal for individual financial budgeting",
    },
    {
      name: "Pro",
      price: yearly ? "$225" : "$20",
      popular: true,
      features: [
        { title: "Unlimited Accounts", description: "Perfect for small businesses", featured: true },
        { title: "Automated Bank Sync", description: "Automatically sync your bank accounts for better tracking" }, 
        { title: "AI-powered Rceipt Scanner & Insights", description: "Detailed insights and reports" },
      ],
      description: "Professional solutions for growing businesses",
    },
    {
      name: "Enterprise",
      price: yearly ? "$499" : "$45",
      features: [
        { title: "Multi-user/team access", description: "Multiple user log-ins and tracking for groups", featured: true },
        { title: "Team-wide analytics", description: "Detailed money tracking to achieve saving goals down to the cents" },
        { title: "24/7 customer support and dedicated success manager", description: "A personal financial team to help stay on target and provide spending habit feedback", featured: true },
      ],
      description: "Custom solutions for large organizations, families, etc",
    },
  ];

  return (
    <div className="bg-[#fafff7] min-h-screen">
      {/* Hero Section */}
      <section className="pb-12">
        <HeroSection />
      </section>

    <HowItWorksSection/>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-8">
            <h2 className="text-black/90 text-5xl font-bold mb-5">
              Choose the plan for you
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base font-light uppercase text-black">
              <span>Monthly</span>
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={yearly}
                  onChange={togglePricing}
                />
                <div className="w-full h-full bg-gray-300 rounded-full transition peer-checked:bg-gradient-to-r peer-checked:from-[#b1da78] peer-checked:to-[#8aeb30]"></div>
                <div className="absolute left-1 bottom-1 bg-white w-6 h-6 rounded-full transition peer-checked:translate-x-6"></div>
              </label>
              <span className="flex items-center gap-2">
                Yearly
                <span className="ml-2 px-2 py-0.5 bg-[#8aeb30] text-black text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </header>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white ${
                  plan.popular ? "ring-2 ring-black" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 right-4 bg-[#8aeb30] text-black px-3 py-0.5 text-sm font-light rounded-full shadow">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col h-full p-4">
                  <div className="text-center mb-4">
                    <h2 className="text-lg sm:text-xl font-normal mb-1 text-black">
                      {plan.name}
                    </h2>
                    <div className="text-2xl sm:text-3xl font-bold text-black/90">
                      {plan.price}
                    </div>
                  </div>

                  <ul className="flex-1 space-y-2 mb-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 p-2 rounded-md transition text-sm ${
                          feature.featured
                            ? "bg-[#f7f9f4] border-l-4 border-black"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-base text-[#8aeb30] font-semibold">✓</span>
                        <div>
                          <p className="font-medium text-gray-800">{feature.title}</p>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-auto w-full bg-black text-white rounded-full font-medium py-2.5 hover:shadow-md transition text-sm">
                    Choose Plan
                  </button>
                </div>
              </div>
              ))}
              </div>
            </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
