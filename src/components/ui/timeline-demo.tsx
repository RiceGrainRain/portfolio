import React from "react";
import { Timeline } from "../ui/timeline";
import { SiPython, SiCplusplus, SiPytorch, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiFlutter, SiMongodb, SiRust, SiFirebase, SiArchlinux, SiCsharp, SiGnubash, SiReact, SiUnity, SiGodotengine} from "react-icons/si";

interface TimelineDemoProps {
  id?: string;
}

export function TimelineDemo({ id }: TimelineDemoProps) {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Manas and Will’s journey began in an unexpected place—TAMS, a prestigious private high school six hours away from their homes...
          </p>
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-center items-center">
              <SiCplusplus size={60} color="#00599C" /> {/* C++ icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiPython size={60} color="#3776AB" /> {/* Python icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiPytorch size={60} color="#EE4C2C" /> {/* PyTorch icon in red */}
            </div>
            <div className="flex justify-center items-center">
              <SiArchlinux size={60} color="#1793d1" /> {/* PyTorch icon in red */}
            </div>
            <div className="flex justify-center items-center">
              <SiGnubash size={60} color="#85bb65" /> {/* PyTorch icon in red */}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As high school progressed, Manas and Will’s friendship evolved into something much more significant...
          </p>
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-center items-center">
              <SiHtml5 size={60} color="#E34F26" /> {/* HTML5 icon in orange */}
            </div>
            <div className="flex justify-center items-center">
              <SiCss3 size={60} color="#1572B6" /> {/* CSS3 icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiJavascript size={60} color="#F7DF1E" /> {/* JavaScript icon in yellow */}
            </div>
            <div className="flex justify-center items-center">
              <SiTypescript size={60} color="#3178C6" /> {/* TypeScript icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiFlutter size={60} color="#02569B" /> {/* Flutter icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiMongodb size={60} color="#47A248" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiReact size={60} color="#3688c7" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiUnity size={60} color="#ffffff" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiCsharp size={60} color="#00599C" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiGodotengine size={60} color="#1572B6" /> {/* MongoDB icon in green */}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Despite the physical distance that college introduced—Manas and Will enrolled in different institutions...
          </p>
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-center items-center">
              <SiRust size={60} color="#DEA584" /> {/* Rust icon in brown */}
            </div>
            <div className="flex justify-center items-center">
              <SiFirebase size={60} color="#FFCA28" /> {/* Firebase icon in yellow */}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id={id}>
      <Timeline data={data} />
    </div>
  );
}
