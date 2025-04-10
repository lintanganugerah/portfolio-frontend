import React from "react";
import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";

type TimelineItemProps = {
	title: string;
	subtitle: string;
	date: string;
	description: EditorJsContent;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
	title,
	subtitle,
	date,
	description,
}) => {
	return (
		<div className='relative pl-6 pb-6'>
			<div className='flex flex-row items-center'>
				<div className='absolute -left-1 w-2 h-2 bg-yellow-400 rounded-full'></div>
				<h3 className='text-xl font-semibold text-white'>{title}</h3>
			</div>
			<h4 className='text-lg text-gray-400'>{subtitle}</h4>
			<p className='text-sm text-gray-500 uppercase tracking-wide'>{date}</p>
			<div className='text-gray-300 mt-2'>
				<Output data={description} />
			</div>
		</div>
	);
};
