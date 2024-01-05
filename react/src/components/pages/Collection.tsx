import { useState, useEffect } from "react";
import Videogame from "@/model/videogame";

function Collection() {
	const [videogames, setVideogames] = useState<Videogame[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3002/videogames");
				if (!response.ok) {
					throw new Error("Failed to fetch videogames");
				}
				const data = await response.json();
				setVideogames(data);
			} catch (error) {
				console.error("Error fetching videogames:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="my-24">
			<h1 className="text-5xl font-bold text-center my-10">
				Explore a world of
				<span className="text-primary"> possibilities</span>
			</h1>

			<div className="flex justify-center items-center mx-10 gap-8 flex-wrap">
				{videogames.map((videogame) => (
					<div
						key={videogame._id}
						className="flex flex-col mt-6 text-foreground shadow-md bg-clip-border rounded-xl w-72 min-w-[18rem] min-h-[415px] ring-2"
					>
						<div className="h-84 mx-4 mt-3 overflow-hidden text-foreground shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
							<img src={videogame.image} alt="card-image" />
						</div>
						<div className="px-6 py-2">
							<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								{videogame.title}
							</h5>
							<h3 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
								&#8364;{videogame.price}
							</h3>
						</div>
						<div className="px-6 pb-3">
							<a
								className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
								type="button"
								href={`/details/${videogame._id}`}
							>
								Buy now!
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Collection;
