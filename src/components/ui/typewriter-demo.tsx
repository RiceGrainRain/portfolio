"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi,",
      className: 'text-white xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl'
    },
    {
      text: "I'm",
      className: 'text-white xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl'
    },
    {
      text: "Manas",
      className: "text-blue-500 xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl",
    },
    {
      text: "Navale.",
      className: "text-blue-500 xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
