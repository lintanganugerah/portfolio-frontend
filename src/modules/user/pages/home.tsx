import { Interest } from "../components/interest/interest";
import { IntroFeatures } from "../features/introFeatures";
import { CertificateFeatures } from "../features/certificateFeatures";
import ExperienceFeatures from "../features/experienceFeatures";
// import { ContactFeatures } from "../features/contact";
import { ProjectFeatures } from "../features/projectFeatures";
import { memo, useState } from "react";
import Particles from "../utils/particles/particles";
import { MdWorkOutline, MdSchool, MdCode } from "react-icons/md";
import { AboutMeFeatures } from "../features/aboutMeFeatures";

export const HomeRoute = memo(() => {
  const [activeTab, setActiveTab] = useState("project");

  return (
    <div className="sm:snap-y sm:snap-mandatory h-screen w-full overflow-x-hidden bg-gray-950">
      <div className="sm:snap-start h-screen w-full flex items-center justify-center text-8xl relative text-white bg-gradient-to-t from-gray-950 to-black">
        <div className="absolute w-full h-full">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            sizeRandomness={0.8}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
          <IntroFeatures nameStyle="bg-gradient-to-r from-indigo-800 to-blue-300 text-transparent bg-clip-text" />
        </div>
      </div>
      <div className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16">
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-4">
          About Me
        </div>
        <AboutMeFeatures />
      </div>
      <div className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16">
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-4">
          EXPERIENCE
        </div>
        <ExperienceFeatures />
      </div>

      <div className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16 pt-20 pb-20">
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-8">
          Showcase
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-full">
          <button
            onClick={() => setActiveTab("project")}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 w-32 ${
              activeTab === "project"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            <MdWorkOutline size={24} className="mb-2" />
            <span className="text-sm font-medium">Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("certification")}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 w-32 ${
              activeTab === "certification"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            <MdSchool size={24} className="mb-2" />
            <span className="text-sm font-medium">Certifications</span>
          </button>
          <button
            onClick={() => setActiveTab("techstack")}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 w-32 ${
              activeTab === "techstack"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            <MdCode size={24} className="mb-2" />
            <span className="text-sm font-medium">Tech Stack</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-full">
          {activeTab === "project" && <ProjectFeatures />}
          {activeTab === "certification" && <CertificateFeatures />}
          {activeTab === "techstack" && <Interest />}
        </div>
      </div>

      {/*
        <ProjectFeatures />
        <CertificateFeatures /> */}

      {/* <div id="contact">
        <div className="h-20 bg-gradient-to-b from-black to-stone-950"></div>
        <ContactFeatures />
      </div> */}
    </div>
  );
});
