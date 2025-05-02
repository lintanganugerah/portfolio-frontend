import {
	FaArrowRight,
	FaRegCopyright,
} from "react-icons/fa";

interface ContactProps {
	social: {
		app_name: string;
		link: string;
		_id: string;
	}[];
}

export const Contact = ({ social }: ContactProps) => {
	return (
		<div className='bg-stone-950'>
			<div className='container mx-auto px-4 py-14 flex flex-col space-y-8'>
				{/* Social Section */}
				<div className='flex flex-col md:flex-row md:space-x-20 items-center md:items-start text-center md:text-left'>
					<div className='flex flex-col space-y-2'>
						<h3 className='font-semibold text-lg'>REACH ME ON SOCIALS</h3>
						<div className='flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0'>
						{social ? (
							social.map((item) => (
							<div key={item._id} className='flex items-center justify-center space-x-2'>
								<a
								href={item.link}
								className='hover:text-blue-400 hover:underline'
								target='_blank'
								rel='noopener noreferrer'
								>
								{item.app_name}
								</a>
								<FaArrowRight size={12} />
							</div>
							))
						) : (
							<p className='text-stone-600 text-sm'>No social links available.</p>
						)}
						</div>
					</div>
				</div>

				{/* Footer Section */}
				<div className='flex flex-col space-y-4 items-center'>
					<div className='border border-stone-800 w-full'></div>
					<div className='flex flex-row items-center space-x-2 text-sm text-stone-800'>
						<FaRegCopyright size={10} />
						<p>@Mabaryok Productive</p>
					</div>
				</div>
			</div>
		</div>
	);
};
