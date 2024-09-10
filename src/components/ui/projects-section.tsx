import React from "react";

const projects = [
  {
    title: "Travlr",
    description: "I spent a whole day and chose react-showroom... I encountered several minor problems using it in my libraries, but starting a new project was simple. Will follow this project.",
    image: "src/assets/LinkedIn.jpg",
  },
  {
    title: "Vpost",
    description: "Vpost is a project where I utilized React to create a functional and aesthetically pleasing platform for sharing and interacting with content.",
    image: "src/assets/LinkedIn.jpg",
  },
  {
    title: "Flashnotes",
    description: "Flashnotes is an educational app designed to help students quickly capture and review notes with a flashcard interface, built using React and Firebase.",
    image: "src/assets/LinkedIn.jpg",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8 text-left pl-60 pt-32">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex items-center justify-center space-x-8 ${
              index % 2 === 0 ? "flex-row pl-60" : "flex-row-reverse pr-60"
            }`}
          >
            <div className="w-1/2">
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-1/2 h-auto rounded-lg shadow-lg px-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
