const Videogame = require("./../models/videogame");

//POST
const createVideogame = async (req, res) => {
	const { title, author, price, image, platform, description } = req.body;

	const videogame = await Videogame.create({
		title: title,
		author: author,
		price: price,
		image: image,
		description: description,
		platform: platform,
	});
	res.json({ videogame });
};

const fetchVideogames = async (req, res) => {
	try {
		const videogames = await Videogame.find();
		res.json(videogames);
	} catch (error) {
		console.error("Error fetching videogames:", error);
		res.status(500).json({ error: "Failed to fetch videogames" });
	}
};

const fetchVideogame = async (req, res) => {
	try {
		const videogameId = req.params.id;
		const videogame = await Videogame.findById(videogameId);

		if (!videogame) {
			return res.status(404).json({ error: "Videogame not found" });
		}

		res.json(videogame);
	} catch (error) {
		console.error("Error fetching videogame:", error);
		res.status(500).json({ error: "Failed to fetch videogame" });
	}
};

const fetchVideogamesByTitle = async (req, res) => {
	try {
		const title = req.params.title;
		const videogames = await Videogame.find({
			title: { $regex: new RegExp(title, "i") },
		});

		if (videogames.length === 0) {
			return res
				.status(404)
				.json({ error: "No videogames found with the given title" });
		}

		res.json(videogames);
	} catch (error) {
		console.error("Error fetching videogames by title:", error);
		res.status(500).json({ error: "Failed to fetch videogames by title" });
	}
};

module.exports = {
	createVideogame,
	fetchVideogames,
	fetchVideogame,
	fetchVideogamesByTitle,
};
