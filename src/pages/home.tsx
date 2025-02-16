import Timeline from "@components/experience";
import { Interest } from "@components/interest";
import { Intro } from "@components/intro";
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
				<div className='relative flex flex-col space-y-20'>
					<div className='sticky top-0 z-20 my-2'>
						<Navigation />
					</div>

					<Intro />

					<Interest />

					<div>
						<h3>Works</h3>
						<h4>Rovino sANJAYa!</h4>
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
