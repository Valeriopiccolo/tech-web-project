import {
	fnatic,
	pro,
	t1,
	g2,
	nip,
	liquid,
	vitality,
} from "@/assets/imageIndex";
import Gallery from "../Gallery";

function Dashboard() {
	return (
		<div className="flex-col items-center justify-center lg:block w-2/3 m-auto">
			<div className="text-center my-24">
				<h1 className="text-5xl font-bold">
					Welcome to the
					<span className="text-primary"> Gaming</span> house
				</h1>
			</div>
			<div className=" my-24">
				<h1 className="text-2xl font-bold text-center">
					<span className="text-primary"> Hottest</span> ones &#128293;
				</h1>
				<div className="flex justify-center items-center">
					<Gallery />
				</div>
			</div>
			<div className="relative isolate top-36">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-20 xl:px-5 xl:my-40 xl:gap-32 xl:flex-row xl:items-center xl:justify-center">
				<img src={pro} className="h-[780px] rounded-2xl" alt="proplayer" />
				<div>
					<h1 className="font-semibold text-2xl mb-10">
						A word from our <span className="text-primary">Partners</span>
					</h1>
					<div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={t1} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">T1 Pro</h6>
								<p className="h-4 text-sm">
									- A paradise for gaming enthusiasts!
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={fnatic} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">Fnatic</h6>
								<p className="h-4  text-sm">
									- The catalog provides an exceptional shopping experience.
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={g2} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">G2 pro</h6>
								<p className="h-4  text-sm">
									- We've discovered incredible games and new releases.
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={liquid} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">Liquid</h6>
								<p className="h-4  text-sm">
									- Captivating design and informative content.
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={vitality} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">Vitality</h6>
								<p className="h-4  text-sm">
									- Congratulations on the intuitive interface!
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-8">
							<img src={nip} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">NiP pro</h6>
								<p className="h-4  text-sm">
									- Impresses with its game selection and user-experience
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
