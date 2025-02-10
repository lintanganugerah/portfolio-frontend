import SpotlightCard from "@utils/spotlight-card";

export const Navigation = () => {
	return (
		<SpotlightCard className='h-fit' spotlightColor='rgba(0, 229, 255, 0.2)'>
			<div className='flex flex-row justify-around'>
				<div className='w-1/2 flex  justify-center'>
					<div className='w-full flex flex-row justify-around'>
						<div className='hover:font-semibold cursor-pointer'>Home</div>
						<div className='hover:font-semibold cursor-pointer'>Experience</div>
						<div className='hover:font-semibold cursor-pointer'>Works</div>
						<div className='hover:font-semibold cursor-pointer'>
							Certificate
						</div>
					</div>
				</div>
				<div className='w-8 h-8 border rounded-full'>
					<div className=''>
						<img src='' alt='Profile Picture' />
					</div>
				</div>
			</div>
		</SpotlightCard>
	);
};
