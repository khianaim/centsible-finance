"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  useEffect(() => {
    const sections = ["features", "pricing"];
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const link = document.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting) {
            link?.classList.add("bg-black", "text-white", "rounded-full", "px-4", "py-2");
          } else {
            link?.classList.remove("bg-black", "text-white", "rounded-full", "px-4", "py-2");
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fafff7]">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex-1">
          <SignedOut>
            <div className="hidden md:flex items-center space-x-6 ml-8 text-base">
           <a
            href="#features"
            className="text-base font-normal rounded-full transition-all duration-300 ease-in-out"
          >
            Features
          </a>
            <a
              href="#pricing"
           className="text-base font-normal rounded-full transition-all duration-300 ease-in-out"
>
              Pricing
            </a>
            </div>
          </SignedOut>
        </div>

        
        {/* Centered Logo */}
       <div className="flex justify-center">
        <Link href="/" passHref>
          <Image
            src="/centsible.png"
            alt="Centsible Logo"
            width={60}
            height={60}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>


        {/* RIGHT */}
        <div className="flex-1 flex justify-end items-center space-x-4">
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
            className="bg-transparent text-base font-normal text-black p-0 m-0 border-none shadow-none hover:bg-transparent hover:text-black focus:outline-none mr-6"
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
