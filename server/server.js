// LOADING ENV VARIABLES
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

// IMPORTS
const express = require("express");
const cors = require("cors");
const connectionHandler = require("./lib/connectionHandler");
const videogameAPI = require("./api/videogameAPI");

// CREATING APP
const app = express();

// CONFIGURE EXPRESS APP
app.use(express.json());
app.use(cors());

// CONNECT TO DB
connectionHandler();

app.post("/videogames", videogameAPI.createVideogame);
app.get("/videogames", videogameAPI.fetchVideogames);
app.get("/videogames/:id", videogameAPI.fetchVideogame);
app.get("/videogames/:title", videogameAPI.fetchVideogamesByTitle);

// RUNNING APP
app.listen(process.env.PORT);
