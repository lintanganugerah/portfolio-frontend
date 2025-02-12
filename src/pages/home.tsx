import Timeline from "@components/experience";
import { Navigation } from "@components/navigation";
import Aurora from "@utils/aurora";

export const HomeRoute = () => {
	return (
		<div className='w-full h-full bg-black text-gray-200'>
			<div className='absolute inset-0 z-0 w-full h-[500px]'>
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					speed={0.5}
					bottomColor='#0C0A09'
				/>
			</div>
			<div className='relative container mx-auto'>
				<div className='relative flex flex-col space-y-8'>
					<div className='sticky top-0 z-20 my-2'>
						<Navigation />
					</div>

					<div className='relative flex flex-row justify-around'>
						<div className='relative w-1/2 flex flex-col space-y-2 z-10'>
							<h4 className='text-xl'>Hello,</h4>
							<h1 className='text-6xl'>Adryan Putra Pratama</h1>
							<h3 className='text-2xl'>
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

					<div className='relative flex flex-col space-y-4'>
						<h2 className='text-4xl'>Interest</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							dolor non alias distinctio ea! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Itaque dolor non alias distinctio
						</p>
						<div className='flex flex-row space-x-4'>
							<div className='border w-10 h-10'>
								<img src='' alt='' />
							</div>
							<div className='border w-10 h-10'>
								<img src='' alt='' />
							</div>
							<div className='border w-10 h-10'>
								<img src='' alt='' />
							</div>
							<div className='border w-10 h-10'>
								<img src='' alt='' />
							</div>
						</div>
					</div>

					<div>
						<h3>Works</h3>
					</div>

					<div className='flex flex-row'>
						<Timeline />
						<Timeline />
					</div>

					<div>
						<h2>Certificate</h2>
					</div>

					<div>
						<h1>Contact Me!</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
