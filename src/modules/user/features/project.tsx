import { useEffect } from "react";
import { fetchProjects } from "../store/thunks/projectThunk";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../store";
import {CardWimages} from '../components/card_with_images/card_wimages'
  
export const ProjectFeatures = () => {
    const dispatch = useAppDispatch();
	const { projects, loading, error } = useAppSelector((state) => state.project);

	// const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchProjects());
	}, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!projects.length) return <p>No Experience data available.</p>;

    // Urutkan terbaru ke terlama
	const sortedProjects = [...projects].sort((a, b) => {
		return new Date(b.year + "-01").getTime() - new Date(a.year + "-01").getTime();
	});
	console.log(sortedProjects)
    
    return (
        <div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold text-center sm:text-left'>Project</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{sortedProjects.map((proj) => (
					<CardWimages 
					title= {proj.title}
					date= {format(new Date(proj.year), "MMMM yyyy")}
					subtitle= {proj.technology}
					link= {proj.link}
					description = {proj.description}
					imageUrl={`https://profilebe.ngeengz.eu/document/thumbnail_image/${proj.project_thumbnail_image}`}/>
				))}
			</div>
		</div>
    )
}