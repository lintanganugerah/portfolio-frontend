import SpotlightCard from "@utils/spotlight-card";

export const Navigation = () => {
	return (
		<SpotlightCard
			className='h-12 mx-24'
			spotlightColor='rgba(0, 229, 255, 0.2)'
		>
			<div className='h-full flex flex-row items-center justify-around'>
				<div className='w-1/2 flex justify-center'>
					<div className='w-full flex flex-row justify-around text-lg'>
						<div className='hover:font-semibold cursor-pointer'>Home</div>
						<div className='hover:font-semibold cursor-pointer'>Experience</div>
						<div className='hover:font-semibold cursor-pointer'>Works</div>
						<div className='hover:font-semibold cursor-pointer'>
							Certificate
						</div>
					</div>
				</div>
				<div className='flex'>
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
