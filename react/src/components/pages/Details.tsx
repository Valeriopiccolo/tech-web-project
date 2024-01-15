import { useState, useEffect } from "react";
import Videogame from "@/model/videogame";
import { useParams } from "react-router-dom";

function Details() {
	const [videogame, setVideogame] = useState<Videogame | null>(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3002/videogames/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch videogame details");
				}
				const data: Videogame = await response.json();
				console.log(data);
				setVideogame(data);
			} catch (error) {
				console.error("Error fetching videogame details:", error);
			}
		};

		if (id) {
			fetchData();
		}
	}, [id]);

	return (
		<div className="flex items-center justify-center p-20">
			{videogame ? (
				<div className="flex flex-col justify-center items-center">
					<div className="w-1/2">
						<div className="mb-5">
							<h1 className="text-5xl font-bold">{videogame.title}</h1>
							<p className="text-xl">{videogame.author}</p>
						</div>
						<div>
							<img
								src={videogame.image}
								alt="Cover Videogame"
								className="rounded-xl my-5 max-w-[600px]"
							/>
							<div className="flex flex-col gap-2">
								<p className="text-2xl font-bold">${videogame.price}</p>
								<p>
									<span className="font-bold">Platform</span>:{" "}
									{videogame.platform.join(", ")}
								</p>
								<p className="max-w-[1200px]">{videogame.description}</p>
							</div>
						</div>
						<form action="#">
							<div className="w-full">
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Quantity
								</label>
								<input
									type="number"
									name="price"
									id="price"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="1"
								/>
							</div>
						</form>
						<a
							className="align-middle my-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
							type="button"
							href={`/buy/${videogame._id}`}
						>
							Buy
						</a>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Details;
