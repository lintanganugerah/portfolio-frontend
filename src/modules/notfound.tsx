import Aurora from "modules/user/utils/aurora";

export function NotFoundRoute() {
	return (
		<div className="relative w-full min-h-screen bg-black overflow-hidden">
			{/* Aurora background */}
			<div className="absolute inset-0 z-0">
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					speed={0.5}
					bottomColor="#0C0A09"
				/>
			</div>

			{/* Centered content */}
			<div className="relative z-3 flex flex-col items-center justify-center text-white text-center min-h-screen p-4">
				<h1 className="text-7xl font-extrabold mb-4">404</h1>
				<p className="text-md">What are you searching for? There is no such thing</p>
			</div>
		</div>
	);
}
