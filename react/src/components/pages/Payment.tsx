import { useState, useEffect } from "react";
import Videogame from "@/model/videogame";
import { useParams } from "react-router-dom";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Payment() {
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
				<div className="flex flex-col justify-center items-start h-[85vh]">
					<h1 className="text-5xl font-bold">{videogame.title}</h1>
					<p className="text-xl">{videogame.author}</p>
					<div>
						<p className="text-2xl font-bold">${videogame.price}</p>
					</div>
					<div className="my-10">
						<form className="flex flex-col gap-4">
							<label className="flex flex-col gap-2">
								Email
								<input
									type="text"
									name="email"
									className="text-black  ring-2"
								/>
							</label>
							<label className="flex flex-col gap-2">
								Card Number
								<input
									type="text"
									name="cardNumber"
									className="text-black  ring-2"
								/>
							</label>
							<label className="flex flex-col gap-2">
								Expiry Date (mm/yy)
								<input
									type="text"
									name="expiryDate"
									className="text-black ring-2"
								/>
							</label>
							<label className="flex flex-col gap-2">
								CVV
								<input type="text" name="cvv" className="text-black  ring-2" />
							</label>
							<AlertDialog>
								<AlertDialogTrigger className="align-middle my-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
									Open
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Thank you for your purchase! &#128293;
										</AlertDialogTitle>
										<AlertDialogDescription>
											Check your emails, we'll send a code as soon as possible
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogAction>Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</form>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Payment;
