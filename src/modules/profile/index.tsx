import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";

export const UserRoute = () => {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	);
};
