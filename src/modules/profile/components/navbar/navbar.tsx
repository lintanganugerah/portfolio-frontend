import SpotlightCard from "modules/profile/components/Reactbits/spotlight-card";
import { MdHome, MdPerson, MdWork, MdWorkOutline } from "react-icons/md";

export default function Navbar() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <SpotlightCard
          className="bg-gray-900/20 backdrop-blur-sm shadow-lg rounded-full px-3 sm:px-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex items-center space-x-2 sm:space-x-4 gap-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <MdHome size={16} />
              <span className="hidden sm:inline sm:text-xs ml-1">Home</span>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <MdPerson size={16} />
              <span className="hidden sm:inline sm:text-xs ml-1">About</span>
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <MdWork size={16} />
              <span className="hidden sm:inline sm:text-xs ml-1">
                Experience
              </span>
            </a>
            <a
              href="#showcase"
              onClick={(e) => scrollToSection(e, "showcase")}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <MdWorkOutline size={16} />
              <span className="hidden sm:inline sm:text-xs ml-1">Showcase</span>
            </a>
          </div>
        </SpotlightCard>
      </nav>
    </>
  );
}
