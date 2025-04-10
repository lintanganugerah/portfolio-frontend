import React from "react";
import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";

type ExperienceCardProps = {
	title: string;
	subtitle: string;
	date: string;
	description: EditorJsContent;
	imageUrl: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
	title,
	subtitle,
	date,
	description,
	imageUrl,
}) => {
	return (
		<div className='rounded-2xl overflow-hidden bg-white shadow-lg w-full max-w-md mx-auto'>
			<div className='bg-green-200 h-40 flex items-center justify-center'>
				<img
					src={imageUrl}
					alt='Project thumbnail'
					width={160}
					height={160}
					className='object-contain rounded-xl'
				/>
			</div>

			<div className='p-5'>
				<h3 className='text-xl font-bold text-gray-900 mb-1'>{title}</h3>
				<p className='text-sm text-gray-500 mb-1'>{subtitle}</p>
				<p className='text-xs text-gray-400 uppercase mb-4'>{date}</p>
				<div className='text-gray-700 text-sm mb-4'>
					<Output data={description} />
				</div>
				<button className='w-full'>View Project</button>
			</div>
		</div>
	);
};
