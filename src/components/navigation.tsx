export const Navigation = () => {
	return (
		<div className='flex flex-row justify-around'>
			<div className='w-1/2 flex  justify-center bg-red-50'>
				<div className='w-full flex flex-row justify-around font-semibold'>
					<div>Intro</div>
					<div>Experience</div>
					<div>Works</div>
					<div>Certificate</div>
				</div>
			</div>
			<div className='w-8 h-8 border rounded-full'>
				<div className=''>
					<img src='' alt='Profile Picture' />
				</div>
			</div>
		</div>
	);
};
