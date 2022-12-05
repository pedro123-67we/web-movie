const express = require("express");
const cors = require('cors');

const {moviesRouter, singupRouter} = require("./routes")

const app = express();

app.use(cors())

app.use(express.json());

app.use("/api/v1/movie", moviesRouter);
app.use ("/api/v1/user", singupRouter);


module.exports = app;