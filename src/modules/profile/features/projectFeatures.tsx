import { memo, useEffect, useMemo, useState } from "react";
import { fetchProjects } from "../store/thunks/projectThunk";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../store";
import { CardWimages } from "../components/card_with_images/card_wimages";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ProjectFeatures = memo(() => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.project);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    dispatch(fetchProjects());

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const sortedProjects = useMemo(() => {
    return [...projects]
      .sort(
        (a, b) =>
          new Date(b.year + "-01").getTime() -
          new Date(a.year + "-01").getTime()
      )
      .map((proj) => ({
        ...proj,
        formattedDate: format(new Date(proj.year), "MMMM yyyy"),
        imageUrl: `https://profilebe.ngeengz.eu/document/thumbnail_image/${proj.project_thumbnail_image}`,
      }));
  }, [projects]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const step = isMobile ? 1 : 3;
      const newIndex = prevIndex - step;
      return newIndex < 0 ? sortedProjects.length - step : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const step = isMobile ? 1 : 3;
      const newIndex = prevIndex + step;
      return newIndex >= sortedProjects.length ? 0 : newIndex;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!projects.length) return <p>No Experience data available.</p>;

  // Get the current projects to display
  const visibleProjects = isMobile
    ? sortedProjects.slice(currentIndex, currentIndex + 1)
    : sortedProjects.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Previous projects"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Next projects"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Carousel Content */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-500 ease-in-out">
            {visibleProjects.map((project) => (
              <CardWimages
                key={project._id}
                title={project.title}
                date={format(new Date(project.year), "MMMM yyyy")}
                subtitle={project.technology}
                link={project.link}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {Array.from({
            length: Math.ceil(sortedProjects.length / (isMobile ? 1 : 3)),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * (isMobile ? 1 : 3))}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === Math.floor(currentIndex / (isMobile ? 1 : 3))
                  ? "bg-blue-600"
                  : "bg-gray-600"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
