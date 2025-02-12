import React from "react";

type TimelineItemProps = {
	title: string;
	subtitle: string;
	date: string;
	description: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
	title,
	subtitle,
	date,
	description,
}) => {
	return (
		<div className='relative pl-6 border-l border-gray-700 pb-6'>
			<span className='absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-1'></span>
			<h3 className='text-xl font-semibold text-white'>{title}</h3>
			<h4 className='text-lg text-gray-400'>{subtitle}</h4>
			<p className='text-sm text-gray-500 uppercase tracking-wide'>{date}</p>
			<p className='text-gray-300 mt-2'>{description}</p>
		</div>
	);
};

const Timeline: React.FC = () => {
	const experiences = [
		{
			title: "Coding Camp powered by DBS Foundation",
			subtitle: "Front-End dan Back-End Developer Cohort",
			date: "Jan 2025 - Present",
			description:
				"Coding Camp powered by DBS Foundation Road to Future Workforce. This information technology training program is designed with high standards to prepare graduates with skills that are ready to be applied in the workforce. This program is the result of a collaboration between DBS Foundation and Dicoding, which has been held since 2022.",
		},
		{
			title: "Bangkit Academy",
			subtitle: "Software Engineering Cohort",
			date: "Jul 2024 - Dec 2024",
			description:
				"An intensive training program that provides hands-on experience in software development and industry-relevant skills.",
		},
	];

	return (
		<div className='bg-black p-8 rounded-lg max-w-2xl mx-auto'>
			<h2 className='text-white text-2xl font-bold mb-6'>EXPERIENCE</h2>
			<div className='space-y-6'>
				{experiences.map((item, index) => (
					<TimelineItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Timeline;
