"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ScrambleText from "./ui/animations/scrambleText";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  const [sectionName, setSectionName] = useState("Finance");

 useEffect(() => {
  const sectionMap = {
    features: "Features",
    pricing: "Plans",
    hero: "Finance", 
  };

  const observers = [];

  Object.entries(sectionMap).forEach(([id, name]) => {
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionName(name);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    observers.push(observer);
  });

  return () => observers.forEach((obs) => obs.disconnect());
}, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* LEFT: Logo + Centsible [Dynamic Word] */}
        <div className="flex items-center space-x-3">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/cf.png" 
                alt="Centsible Logo"
                width={32}
                height={32}
                className="object-contain"
              />
               <span className="hidden sm:inline text-lg font-semibold text-[#f1fde9]">
                Centsible <ScrambleText text={sectionName} />
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT: Auth buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full border-gray-300 flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button variant="outline" className="rounded-full border-gray-300 flex items-center gap-2">
                <PenBox size={18} />
                <span>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="ghost"
                className="bg-transparent text-base font-normal text-[#f1fde9] p-0 m-0 border-none shadow-none hover:bg-transparent hover:text-white focus:outline-none"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
