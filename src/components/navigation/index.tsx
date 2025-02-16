import SpotlightCard from "@utils/spotlight-card";

export const Navigation = () => {
	return (
		<SpotlightCard
			className='h-12 my-6'
			spotlightColor='rgba(0, 229, 255, 0.2)'
		>
			<div className='h-full flex flex-row items-center justify-around'>
				<div className='w-1/2 flex justify-center'>
					<div className='w-full flex flex-row justify-around text-lg'>
						<a className='hover:font-semibold'>Home</a>
						<a className='hover:font-semibold'>Experience</a>
						<a className='hover:font-semibold'>Works</a>
						<a className='hover:font-semibold'>Certificate</a>
					</div>
				</div>
				<div className='flex flex-row items-center space-x-10'>
					<div className='border p-1 px-4 rounded-lg hover:font-semibold hover:bg-white hover:text-black transition-colors duration-300'>
						<a href='' className='text-lg'>
							Contact Me
						</a>
					</div>
					<div className='w-8 h-8 rounded-full overflow-hidden'>
						<img
							src='https://i.pinimg.com/736x/b1/5e/85/b15e8553355db06334c863b60ac04d5c.jpg'
							alt='Profile Picture'
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</SpotlightCard>
	);
};
