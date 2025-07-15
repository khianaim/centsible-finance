"use client";
import { useScramble } from 'use-scramble';

export default function ScrambleText({ text }) {
  const { ref } = useScramble({
    text,
    speed: 0.4,
    tick: 2,
    scramble: 4,
    overdrive: false,
    overflow: false,
  });

  return (
    <span
      ref={ref}
      className="inline-block text-[#d5efc3] transition-all duration-500"
    />
  );
}
