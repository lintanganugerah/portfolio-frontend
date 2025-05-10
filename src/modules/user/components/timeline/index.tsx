
// import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";
import { FaXmark } from "react-icons/fa6";
import { TimelineCard } from "./details";
import { FaSpinner } from "react-icons/fa6";
import React, { useRef, useState } from "react";

type TimelineItemProps = {
	title: string;
	subtitle: string;
	date: string;
	description?: EditorJsContent;
	link?:string;
	type?:string;
	image?:string;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
	title,
	subtitle,
	date,
	description,
	link,
	type,
	image
}) => {
	const [loading, setLoading] = useState(false);
	const [opened, setOpened] = useState(false);
	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		if (!description || opened) return;

		setLoading(true);

		hoverTimeoutRef.current = setTimeout(() => {
			setOpened(true);
			setLoading(false);
		}, 700); // 0.7 detik delay
	};

	const handleMouseLeave = () => {
		if (!description || opened) return;

		setLoading(false);

		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
			hoverTimeoutRef.current = null;
		}
	};

	const handleClose = () => {
		setOpened(false);
		setLoading(false);
	};

	
	const getImageUrl = (image? : string) => {
	if (!image) {
		return "/public/assets/placeholder.png";
	}

	if (image.startsWith("https")) {
		return image;
	}

	// jika image bukan URL lengkap, tapi ada isinya
	return `https://profilebe.ngeengz.eu/document/thumbnail_image/${image}`;
	};

	return (
		<div className='relative pl-6 pb-6 group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className='flex flex-row items-center cursor-pointer'>
				{/* Yellow dot with dynamic icon */}
				<div className='absolute -left-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300'>
					{opened ? (
						<FaXmark
							size={11}
							color='black'
							className='cursor-pointer'
							onClick={handleClose}
						/>
					) : loading ? (
						<FaSpinner
							size={10}
							color='black'
							className='animate-spin'
						/>
					) : null}
				</div>

				<h3 className='text-xl font-semibold text-white'>{title}</h3>
			</div>

			<h4 className='text-lg text-gray-400'>{subtitle}</h4>
			{type && (<h4 className='text-sm text-gray-400'>Type: {type}</h4>)}
			<p className='text-sm text-gray-500 uppercase tracking-wide'>{date}</p>

			{/* TimelineCard muncul setelah delay hover */}
			{opened && description && (
				<div
					className={`absolute left-8 top-0 align-middle z-50 transition-all duration-300 animate-fade-in`}
				>
					<TimelineCard
						title={title}
						subtitle={subtitle}
						date={date}
						description={description}
						imageUrl={getImageUrl(image)}
						link={link}
					/>
				</div>
			)}
		</div>
	);
};
