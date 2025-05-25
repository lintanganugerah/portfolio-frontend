import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Interest = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [screenSize, setScreenSize] = useState<"medium" | "large">("large");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 1280) {
        // sm breakpoint
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemsPerPage = {
    medium: 9, // 3x3
    large: 12, // 4x3
  }[screenSize];

  const techStacks = [
    { name: "Node.js", logo: "assets/logo/nodejs.svg" },
    { name: "Express", logo: "assets/logo/expressjs-light.svg" },
    { name: "MongoDB", logo: "assets/logo/mongodb.svg" },
    { name: "Redis", logo: "assets/logo/redis.svg" },
    { name: "React", logo: "assets/logo/react.svg" },
    { name: "Tailwind CSS", logo: "assets/logo/tailwindcss.svg" },
    { name: "PostgreSQL", logo: "assets/logo/postgresql.svg" },
    { name: "AWS", logo: "assets/logo/aws-dark.svg" },
    { name: "Laravel", logo: "assets/logo/laravel2.svg" },
    { name: "Javascript", logo: "assets/logo/javascript.svg" },
    { name: "MySQL", logo: "assets/logo/mysql.svg" },
    { name: "Go", logo: "assets/logo/go.svg" },
    { name: "Typescript", logo: "assets/logo/typescript.svg" },
    { name: "Postman", logo: "assets/logo/postman.svg" },
    { name: "Swagger", logo: "assets/logo/swagger.svg" },
  ];

  const totalPages = Math.ceil(techStacks.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = techStacks.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Controls - Prev Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-colors duration-300 ${
            currentPage === 0
              ? " text-gray-500 cursor-not-allowed"
              : " hover:bg-black/70 text-white"
          }`}
          aria-label="Previous"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Controls - Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-colors duration-300 ${
            currentPage === totalPages - 1
              ? " text-gray-500 cursor-not-allowed"
              : " hover:bg-black/70 text-white"
          }`}
          aria-label="Next"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Grid Section */}
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 justify-center w-full">
          {currentItems.map((stack, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center content-center bg-gray-900/50 backdrop-blur-md p-4 rounded-2xl shadow transition-transform duration-300 hover:rotate-2 hover:scale-115"
            >
              <img
                src={stack.logo}
                alt={stack.name}
                className="w-12 h-12 mb-2 object-cover transition-transform duration-300 group-hover:scale-125"
              />
              <span className="text-sm font-medium text-white">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
