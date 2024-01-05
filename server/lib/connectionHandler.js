// LOADING ENV VARIABLES
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectionHandler() {
	try {
		await mongoose.connect(process.env.DB_CONNECTION_STRING);
		console.log("connected to database");
	} catch (err) {
		console.log(err);
	}
}

module.exports = connectionHandler;
