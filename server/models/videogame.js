const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	platform: {
		type: [String],
		required: true,
	},
});

const Videogame = mongoose.model("Videogame", videogameSchema);

module.exports = Videogame;
