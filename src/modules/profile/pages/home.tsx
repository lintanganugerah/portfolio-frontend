import { Interest } from "../components/interest/interest";
import { IntroFeatures } from "../features/introFeatures";
import { CertificateFeatures } from "../features/certificateFeatures";
import ExperienceFeatures from "../features/experienceFeatures";
import { ProjectFeatures } from "../features/projectFeatures";
import { memo, useState } from "react";
import Particles from "../components/Reactbits/particles/particles";
import { MdWorkOutline, MdSchool } from "react-icons/md";
import Navbar from "../components/navbar/navbar";
import { ReactTyped } from "react-typed";

export const HomeRoute = memo(() => {
  const [activeTab, setActiveTab] = useState("project");

  return (
    <div className="sm:snap-y sm:snap-mandatory h-screen w-full overflow-x-hidden bg-gray-950">
      <Navbar />

      {/* Home */}
      <div
        id="home"
        className="sm:snap-start h-screen w-full flex items-center justify-center text-8xl relative text-white bg-gradient-to-t from-gray-950 to-black"
      >
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
          <IntroFeatures />
        </div>
      </div>

      {/* What I Do */}
      <div
        id="about"
        className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16 sm:mb-0 mb-20"
      >
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-4">
          What I Do
        </div>
        <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center items-center sm:gap-0 gap-4">
          <div className="p-4 text-white flex flex-col gap-4 items-center content-center">
            <div className="text-4xl sm:text-6xl font-bold sm:text-left text-center w-full">
              <ReactTyped
                strings={[
                  "Backend Development",
                  "Frontend Development",
                  "Full Stack Development",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop={true}
                className="sm:text-left break-words text-center bg-gradient-to-r from-cyan-300 to-blue-800 bg-clip-text text-transparent"
              />
            </div>
            <div className="text-sm sm:text-base sm:text-left text-center font-light max-w-full">
              I'm the developer who loves to build things and learn new things!
              A shiny new technology are catching my eyes, but i also know when
              to use battle-tested solution instead
            </div>
          </div>
          <div className=" rounded p-4 text-white font-bold">
            <Interest />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div
        id="experience"
        className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16"
      >
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-4">
          EXPERIENCE
        </div>
        <ExperienceFeatures />
      </div>

      {/* Showcase */}
      <div
        id="showcase"
        className="sm:snap-start sm:h-screen w-full mx-auto flex flex-col items-center justify-center overflow-y-auto px-4 md:px-8 lg:px-16 pt-20 pb-20"
      >
        <div className="sm:text-6xl text-4xl text-white font-bold text-center mb-8">
          Showcase
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-full">
          <button
            onClick={() => setActiveTab("project")}
            className={`flex flex-rows items-center p-4 rounded-xl transition-all duration-300 w-fit gap-3 ${
              activeTab === "project"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            <MdWorkOutline size={24} />
            <span className="text-sm font-medium">Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("certification")}
            className={`flex flex-rows items-center p-4 rounded-xl transition-all duration-300 w-fit gap-3 ${
              activeTab === "certification"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            <MdSchool size={24} />
            <span className="text-sm font-medium">Certifications</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-full">
          {activeTab === "project" && <ProjectFeatures />}
          {activeTab === "certification" && <CertificateFeatures />}
        </div>
      </div>
    </div>
  );
});
