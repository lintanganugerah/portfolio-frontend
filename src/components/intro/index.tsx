export const Intro = () => {
	return (
		<div className='relative flex flex-row justify-around items-center'>
			<div className='relative w-1/2 flex flex-col space-y-4 z-10'>
				<div className='flex flex-row items-center space-x-4'>
					<div className='border-b w-8'></div>
					<h4 className='text-xl'>Hello,</h4>
				</div>
				<h1 className='font-russo text-7xl'>Adryan Putra Pratama</h1>
				<h3 className='text-xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
					non alias distinctio ea!
				</h3>
			</div>
			<div className='relative w-1/4 z-10'>
				<img
					src='https://i.pinimg.com/736x/b1/5e/85/b15e8553355db06334c863b60ac04d5c.jpg'
					alt='photo'
					className='rounded-4xl -rotate-6 hover:rotate-0 transition-transform duration-300'
				/>
			</div>
		</div>
	);
};
