"use client";
import React from "react";
import { Carousel, Card } from "../../components/ui/background-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 pr-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        My Experience and Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Ubisoft = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"ubisoft" + index}
            className="p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
            </p>
          </div>
        );
      })}
    </>
  );
};

const McDermott = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
          key={"ubisoft" + index}
          className="p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
          </p>
        </div>
        );
      })}
    </>
  );
};

const VEGS = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
          key={"ubisoft" + index}
          className="p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
          </p>
        </div>
        );
      })}
    </>
  );
};

const Namuduri = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"ubisoft" + index}
            className="p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
            </p>
          </div>
        );
      })}
    </>
  );
};

const Vpost = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
          key={"ubisoft" + index}
          className="p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
          </p>
        </div>
        );
      })}
    </>
  );
};

const Travlr = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
          key={"ubisoft" + index}
          className="p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
          </p>
        </div>
        );
      })}
    </>
  );
};

const FlashNotes = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
          key={"ubisoft" + index}
          className="p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt faucibus felis, et fermentum nunc iaculis eget. Curabitur sit amet ligula quis lorem vestibulum tincidunt. Donec lacinia, libero at feugiat ultricies, sapien dui facilisis nulla, id sagittis lacus augue vel arcu. Integer sit amet odio in ipsum tempor viverra. Praesent eget odio sit amet dolor aliquam dapibus. In varius urna sed libero sollicitudin malesuada. Quisque lobortis quam a nulla aliquet, vitae fermentum ligula elementum. Donec aliquet, sapien at cursus finibus, tortor orci tincidunt velit, a ultricies magna risus at risus. Vestibulum imperdiet sagittis ante, ut dictum lacus tempor a. Phasellus feugiat volutpat gravida. Integer sit amet neque non velit scelerisque rhoncus nec ut felis. Pellentesque mollis laoreet odio, sit amet accumsan ante dictum in. Integer viverra magna sit amet nisl consectetur feugiat. Mauris aliquam ex nisi, vitae fermentum ante tincidunt sed.

Vivamus convallis risus nec magna efficitur, sit amet lobortis ipsum luctus. Nam in risus non turpis tincidunt vehicula. Nunc ullamcorper massa in augue efficitur lacinia. Aliquam ut tincidunt elit. Donec euismod posuere urna, eget hendrerit erat dapibus ac. Nam sollicitudin, odio ut varius pellentesque, nulla erat sollicitudin libero, ut rhoncus ante libero sit amet ex. Duis id dapibus magna. Duis quis velit pharetra, hendrerit orci non, hendrerit tortor. Etiam tempor ligula ligula, in vulputate enim sollicitudin eget. Sed ultricies libero a quam egestas, quis pellentesque neque eleifend. Nullam a odio felis. Fusce ornare, lectus at ultricies posuere, erat velit finibus elit, in viverra mi sapien at purus. Maecenas suscipit sem turpis, quis pharetra ex venenatis eu. Donec at malesuada tortor, non dapibus ligula. In vestibulum justo ac suscipit posuere. Nulla ac posuere turpis, at lacinia lectus.
          </p>
        </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Internships",
    title: "McDermott",
    src: "src/assets/mcdermott.png",
    content: <McDermott />,
  },
  {
    category: "Internships",
    title: "Ubisoft",
    src: "src/assets/ubisoft.avif",
    content: <Ubisoft />,
  },
  {
    category: "Projects",
    title: "Travlr",
    src: "src/assets/travlr.jpg",
    content: <Travlr />,
  },

  {
    category: "Projects",
    title: "Vpost",
    src: "src/assets/vpost.jpg",
    content: <Vpost/>,
  },
  {
    category: "Projects",
    title: "Flash Notes",
    src: "src/assets/fnotes.jpg",
    content: <FlashNotes/>,
  },
  {
    category: "Research",
    title: "Drone Pathing ML",
    src: "src/assets/dpathing.avif",
    content: <Namuduri />,
  },
  {
    category: "Research",
    title: "VEGS",
    src: "src/assets/nml.png",
    content: <VEGS />,
  },
];

export default AppleCardsCarouselDemo;
