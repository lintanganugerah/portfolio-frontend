import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
	createBrowserRouter([
		{
			path: "/",
			lazy: async () => {
				const { HomeRoute } = await import("./modules/user/pages/home");
				return { Component: HomeRoute };
			},
		},
		{
			path: "/profile",
			lazy: async () => {
				const { ProfileRoute } = await import("./modules/user/pages/profile");
				return { Component: ProfileRoute };
			},
		},
	]);
