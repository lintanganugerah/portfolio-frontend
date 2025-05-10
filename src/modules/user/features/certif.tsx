import { useEffect } from "react";
import { fetchCertificates } from "../store/thunks/certificateThunk";
import { useAppDispatch, useAppSelector } from "../store";
import { Certificate } from "../components/certificate";

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
		<div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold text-center sm:text-left'>CERTIFICATE</h1>
			<div className='border border-gray-800 p-6 rounded-xl'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
			</div>
		</div>
	);
};
