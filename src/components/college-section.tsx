import React from "react";

const CollegeSection: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">My Universities</h2>
      <div className="text-center flex justify-center items-center space-x-8">
        <img
          src="src/assets/unt.png"
          alt="University of North Texas"
          className="w-1/4 h-auto rounded-lg shadow-lg"
        />
        <img
          src="src/assets/tamu.png"
          alt="Texas A&M University"
          className="w-1/4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CollegeSection;
