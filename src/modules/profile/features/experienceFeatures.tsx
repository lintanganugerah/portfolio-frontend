import { format } from "date-fns";
import Experience from "../components/experience.tsx/experienceCard.components";
import { fetchExperiences } from "../store/thunks/experienceThunk";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";

export default function ExperienceFeatures() {
  const dispatch = useAppDispatch();
  const { experiences, loading, error } = useAppSelector(
    (state) => state.experience
  );
  const [jobPage, setJobPage] = useState(1);
  const [orgPage, setOrgPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!experiences.length) return <p>No Experience data available.</p>;

  const sortedExperiences = [...experiences].filter(
    (value) => value.type == "job"
  );

  const sortedExperiencesOrganization = [...experiences].filter(
    (value) => value.type == "organizational"
  );

  const dataJob = sortedExperiences.map((exp) => ({
    _id: exp._id,
    entity: exp.entity,
    title: exp.position,
    description: exp.description,
    type: exp.type,
    date:
      format(new Date(exp.startDate), "yyyy MMMM") +
      " - " +
      format(new Date(exp.endDate), "yyyy MMMM"),
  }));

  const dataOrganization = sortedExperiencesOrganization.map((exp) => ({
    _id: exp._id,
    entity: exp.entity,
    title: exp.position,
    description: exp.description,
    type: exp.type,
    date:
      format(new Date(exp.startDate), "yyyy MMMM") +
      " - " +
      format(new Date(exp.endDate), "yyyy MMMM"),
  }));

  const totalJobPages = Math.ceil(dataJob.length / itemsPerPage);
  const totalOrgPages = Math.ceil(dataOrganization.length / itemsPerPage);

  const handleJobPageChange = (newPage: number) => {
    setJobPage(newPage);
  };

  const handleOrgPageChange = (newPage: number) => {
    setOrgPage(newPage);
  };

  if (!dataJob.length && !dataOrganization.length) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-white">
          No Experience Data Available
        </h2>
        <p className="text-gray-400 mt-2">
          Sorry There are no data to display. Maybe users forgot to add their
          experience.
        </p>
      </div>
    );
  }

  return (
    <div className={dataOrganization.length ? "grid sm:grid-cols-2 gap-4" : ""}>
      <div>
        <Experience
          data={dataJob}
          currentPage={jobPage}
          itemsPerPage={itemsPerPage}
        />
        {totalJobPages > 1 && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handleJobPageChange(jobPage - 1)}
              disabled={jobPage === 1}
              className="px-3 py-1 border border-gray-800 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={() => handleJobPageChange(jobPage + 1)}
              disabled={jobPage === totalJobPages}
              className="px-3 py-1 border border-gray-800 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {dataOrganization.length > 0 && (
        <div>
          <Experience
            data={dataOrganization}
            currentPage={orgPage}
            itemsPerPage={itemsPerPage}
          />
          {totalOrgPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleOrgPageChange(orgPage - 1)}
                disabled={orgPage === 1}
                className="px-3 py-1 border border-gray-800 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-3 py-1">
                {orgPage} / {totalOrgPages}
              </span>
              <button
                onClick={() => handleOrgPageChange(orgPage + 1)}
                disabled={orgPage === totalOrgPages}
                className="px-3 py-1 border border-gray-800 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// <div className="grid sm:grid-cols-2 gap-4">
//   {/* JOB TYPE */}
//   <div className="flex flex-col gap-4">
//     <div className="bg-gray-900/50 backdrop-blur-md border border-neutral-900 rounded-lg text-white p-4">
//       <div className="text-2xl font-bold">Abc</div>
//       <div className="text-sm font-bold">Perusahaan</div>
//       <div className="text-sm font-light text-gray-500">
//         2023 Juni - 2024 Desember
//       </div>
//       <div className="text-sm mt-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//         quos.
//       </div>
//     </div>
//     <div className="bg-gray-900/50 backdrop-blur-md border border-neutral-900 rounded-lg text-white p-4">
//       <div className="text-2xl font-bold">Abc</div>
//       <div className="text-sm font-bold">Perusahaan</div>
//       <div className="text-sm font-light text-gray-500">
//         2023 Juni - 2024 Desember
//       </div>
//       <div className="text-sm mt-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//         quos.
//       </div>
//     </div>
//   </div>

//   {/* ORGANIZATION */}
//   <div className="flex flex-col gap-4">
//     <div className="bg-gray-900/50 backdrop-blur-md border border-neutral-900 rounded-lg text-white p-4">
//       <div className="text-2xl font-bold">Abc</div>
//       <div className="text-sm font-bold">Perusahaan</div>
//       <div className="text-sm font-light text-gray-500">
//         2023 Juni - 2024 Desember
//       </div>
//       <div className="text-sm mt-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//         quos.
//       </div>
//     </div>
//   </div>
// </div>
