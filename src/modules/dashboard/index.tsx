import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";

export const DashboardRoute = () => {
	return (
		<div className='bg-slate-100'>
			<Sidebar />
			<Outlet />
		</div>
	);
};
