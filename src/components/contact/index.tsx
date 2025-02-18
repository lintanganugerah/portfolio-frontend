import {
	FaArrowRight,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

export const Contact = () => {
	return (
		<div className='bg-stone-950'>
			<div className='container p-6'>
				<div className='flex flex-row space-x-8'>
					<div className='flex flex-col'>
						<h3 className='font-semibold text-lg'>REACH ME AT</h3>
						<div className='flex flex-row items-center space-x-2'>
							<a href=''>Email</a>
							<FaArrowRight size={12} />
						</div>
					</div>
					<div className='flex flex-col'>
						<h3 className='font-semibold text-lg'>SOCIAL</h3>
						<div className='flex flex-row space-x-4 text-2xl'>
							<FaLinkedin />
							<FaGithub />
							<FaInstagram />
							<FaTwitter />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
