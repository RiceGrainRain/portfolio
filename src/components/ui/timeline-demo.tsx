import React from "react";
import { Timeline } from "../ui/timeline";
import { SiPython, SiCplusplus, SiPytorch, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiFlutter, SiMongodb, SiRust, SiFirebase, SiArchlinux, SiCsharp, SiGnubash, SiReact, SiUnity, SiGodotengine, SiNextdotjs, SiLinux} from "react-icons/si";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.
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
              <SiLinux size={60} color="#FFCA28" /> {/* Firebase icon in yellow */}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.
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
              <SiFlutter size={60} color="#02569B" /> {/* Flutter icon in blue */}
            </div>
            <div className="flex justify-center items-center">
              <SiMongodb size={60} color="#47A248" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiReact size={60} color="#3688c7" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiRust size={60} color="#DEA584" /> {/* Rust icon in brown */}
            </div>
            <div className="flex justify-center items-center">
              <SiFirebase size={60} color="#FFCA28" /> {/* Firebase icon in yellow */}
            </div>  
            <div className="flex justify-center items-center">
              <SiArchlinux size={60} color="#1793d1" /> {/* PyTorch icon in red */}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.
          </p>
          <div className="grid grid-cols-10 gap-2">
            <div className="flex justify-center items-center">
              <SiUnity size={60} color="#ffffff" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiCsharp size={60} color="#00599C" /> {/* MongoDB icon in green */}
            </div>
            <div className="flex justify-center items-center">
              <SiGodotengine size={60} color="#1572B6" />             
            </div>
            <div className="flex justify-center items-center">
              <SiNextdotjs size={60} color="#ffffff" />             
            </div>
            <div className="flex justify-center items-center">
              <SiTypescript size={60} color="#3178C6" /> {/* TypeScript icon in blue */}
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
