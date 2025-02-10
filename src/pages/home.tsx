import { Navigation } from "@components/navigation";
import Aurora from "@utils/aurora";

export const HomeRoute = () => {
	return (
		<div className='w-full h-full bg-stone-950 text-gray-200'>
			<div className='container py-8 mx-auto'>
				<div className='flex flex-col space-y-8'>
					<Navigation />

					<div className='relative flex flex-row justify-around'>
						<div className='absolute inset-0 z-0'>
							<Aurora
								colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
								speed={0.5}
							/>
						</div>
						<div className='relative w-1/2 flex flex-col space-y-2 z-10'>
							<h4>Hello,</h4>
							<h1 className='text-6xl'>Adryan Putra Pratama</h1>
							<h3>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								dolor non alias distinctio ea!
							</h3>
						</div>
						<div className='relative w-1/4 z-10'>
							<img
								src='https://i.pinimg.com/736x/b1/5e/85/b15e8553355db06334c863b60ac04d5c.jpg'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
