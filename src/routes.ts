import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
	createBrowserRouter([
		{
			path: "/",
			lazy: async () => {
				const { UserRoute } = await import("./modules/profile");
				return { Component: UserRoute };
			},
			children: [
				{
					index: true,
					lazy: async () => {
						const { HomeRoute } = await import("./modules/profile/pages/home");
						return { Component: HomeRoute };
					},
				},
				{
					path: "profile",
					lazy: async () => {
						const { ProfileRoute } = await import(
							"./modules/profile/pages/profile"
						);
						return { Component: ProfileRoute };
					},
				},
			],
		},
		{
			path: "dashboard",
			lazy: async () => {
				const { DashboardRoute } = await import("./modules/dashboard");
				return { Component: DashboardRoute };
			},
			children: [
				{
					index: true,
					lazy: async () => {
						const { DashboardHome } = await import(
							"./modules/dashboard/pages/home"
						);
						return { Component: DashboardHome };
					},
				},
			],
		},
		{
			path: "*",
			lazy: async () => {
				const { NotFoundRoute } = await import("./modules/notfound");
				return { Component: NotFoundRoute };
			},
		},
	]);
