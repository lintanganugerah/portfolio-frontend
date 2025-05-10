interface IntroProps {
	name: string;
	description: string;
}

export const Intro = ({ name, description }: IntroProps) => {
	return (
		<div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-6 lg:px-20 mt-20'>
			{/* Intro Section */}
			<div className='flex-1 flex flex-col justify-start items-center lg:items-start text-center lg:text-left space-y-4'>
				<div className='flex flex-row items-center space-x-4'>
				<div className='border-b w-8'></div>
				<h4 className='text-xl'>Hello, I'm</h4>
				<div className='border-b w-8'></div>
				</div>
				<h1 className='font-russo text-6xl lg:text-7xl'>{name}</h1>
				<h3 className='text-xl'>{description}</h3>
			</div>
		</div>
	);
};
