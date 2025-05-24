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

  useEffect(() => {
    dispatch(fetchProjects());
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
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!projects.length) return <p>No Experience data available.</p>;

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Previous project"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Next project"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Carousel Content */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="transition-transform duration-500 ease-in-out">
            <CardWimages
              key={sortedProjects[currentIndex]._id}
              title={sortedProjects[currentIndex].title}
              date={format(
                new Date(sortedProjects[currentIndex].year),
                "MMMM yyyy"
              )}
              subtitle={sortedProjects[currentIndex].technology}
              link={sortedProjects[currentIndex].link}
              description={sortedProjects[currentIndex].description}
              imageUrl={sortedProjects[currentIndex].imageUrl}
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {sortedProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
