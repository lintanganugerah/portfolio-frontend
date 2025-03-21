import { MdSpaceDashboard } from "react-icons/md";
import { SidebarComponent } from "./comps";

export const Sidebar = () => {
	return (
		<div className='h-screen w-1/5 flex flex-col space-y-4 bg-white'>
			<div className='w-full flex justify-center p-4'>
				<img className='h-32' src='/assets/logo.png' alt='' />
			</div>
			<div className='flex flex-col space-y-4 p-4'>
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
			</div>
		</div>
	);
};
