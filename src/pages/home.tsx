import { Certificate } from "@components/certificate";
import { Contact } from "@components/contact";
import Timeline from "@components/experience";
import { Interest } from "@components/interest";
import { Intro } from "@components/intro";
import { Navigation } from "@components/navigation";
import Aurora from "@utils/aurora";

export const HomeRoute = () => {
	return (
		<div className='w-full bg-black text-gray-200'>
			<div className='absolute inset-0 z-0 w-full'>
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					speed={0.5}
					bottomColor='#0C0A09'
				/>
			</div>
			<div className='flex flex-col space-y-8'>
				<div className='relative container mx-auto min-h-screen'>
					<div className='relative flex flex-col space-y-20 min-h-screen'>
						<div className='sticky top-0 z-20 my-2'>
							<Navigation />
						</div>
						<Intro />
						<Interest />
						<div className='flex flex-row'>
							<Timeline />
							<Timeline />
						</div>
						<Certificate />
					</div>
				</div>
				<div>
					<div className='h-20 bg-gradient-to-b from-black to-stone-950'></div>
					<Contact />
				</div>
			</div>
		</div>
	);
};
