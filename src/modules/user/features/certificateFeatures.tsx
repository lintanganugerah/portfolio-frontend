import { useEffect } from "react";
import { fetchCertificates } from "../store/thunks/certificateThunk";
import { useAppDispatch, useAppSelector } from "../store";
import { Certificate } from "../components/certificate/certificate";

export const CertificateFeatures = () => {
  const dispatch = useAppDispatch();
  const { certificates, loading, error } = useAppSelector(
    (state) => state.certificate
  );

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!certificates.length) return <p>No certificate data available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center content-center">
      {certificates.map((cert) => (
        <Certificate
          key={cert._id}
          title={cert.title}
          description={cert.description}
          link={cert.link}
          year={cert.year}
          id={cert._id}
        />
      ))}
    </div>
  );
};
