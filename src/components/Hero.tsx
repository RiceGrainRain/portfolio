"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import TypewriterEffectSmoothDemo from "./ui/typewriter-demo";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20 flex flex-col items-center">
        <TypewriterEffectSmoothDemo/>
      </div>
    </section>
  );
}

export default Hero;
