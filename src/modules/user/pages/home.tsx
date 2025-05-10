import { Interest } from "modules/user/components/interest";
import Aurora from "modules/user/utils/aurora";
import { IntroFeatures } from "../features/intro";
import { CertificateFeatures } from "../features/certif";
import { ExperienceFeaturesJob, ExperienceFeaturesOrganization } from "../features/experience";
import { ContactFeatures } from "../features/contact";
import { ProjectFeatures } from "../features/project";
import { memo } from "react";

export const HomeRoute = memo(() => {
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
						<IntroFeatures />
						<Interest />
						{/* <div className='flex flex-row justify-center'>
							<div className='bg-black p-8 rounded-lg w-2xl mx-auto'>
								<h2 className='text-white text-2xl font-bold mb-6'>
									EXPERIENCE
								</h2>
								<ExperienceFeatures />
							</div>
							<div className='bg-black p-8 rounded-lg w-2xl mx-auto'>
								<h2 className='text-white text-2xl font-bold mb-6'>PROJECTS</h2>
								<ProjectFeatures />
							</div>
						</div> */}
						<div className="bg-black/20 py-10 px-4 lg:px-12 rounded-lg">
							<div className="flex flex-col lg:flex-row gap-4">
								<ExperienceFeaturesJob />
								<ExperienceFeaturesOrganization />
								{/* <ProjectFeatures /> */}
							</div>
						</div>
						<ProjectFeatures />
						<CertificateFeatures />
					</div>
				</div>
				<div id='contact'>
					<div className='h-20 bg-gradient-to-b from-black to-stone-950'></div>
					<ContactFeatures />
				</div>
			</div>
		</div>
	);
})
