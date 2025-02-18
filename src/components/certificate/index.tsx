import { LuExternalLink } from "react-icons/lu";

export const Certificate = () => {
	return (
		<div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold'>CERTIFICATE</h1>
			<div className='border p-6 rounded-xl'>
				<div className='flex flex-col space-y-6'>
					<div className='flex flex-row justify-around'>
						<div className='flex flex-col space-y-1'>
							<h2 className='text-xl font-bold'>
								Application Development with Cloud Run
							</h2>
							<h3 className='text-gray-400'>Google Cloud Skills Boost</h3>
							<p className='text-gray-500'>Issued Jan 2023</p>
							<p className='text-gray-600'>Credential ID 4060171</p>
							<div className='border w-fit p-1 px-4 rounded-lg mt-2 hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
								<div className='flex flex-row items-center space-x-2'>
									<a href=''>Show Credential</a>
									<LuExternalLink />
								</div>
							</div>
						</div>
						<div className='flex flex-col space-y-1'>
							<h2 className='text-xl font-bold'>
								Application Development with Cloud Run
							</h2>
							<h3 className='text-gray-400'>Google Cloud Skills Boost</h3>
							<p className='text-gray-500'>Issued Jan 2023</p>
							<p className='text-gray-600'>Credential ID 4060171</p>
							<div className='border w-fit p-1 px-4 rounded-lg mt-2 hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
								<div className='flex flex-row items-center space-x-2'>
									<a href=''>Show Credential</a>
									<LuExternalLink />
								</div>
							</div>
						</div>
					</div>
					<div className='border px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
						<div className='flex justify-center'>
							<h2>SHOW ALL CERTIFICATE</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
