const express = require ('express');
const {moviesController} = require('./../controllers');

const moviesRouter = express.Router();

moviesRouter
    .route("/")
    .get(moviesController.getAllMovies)
    .post(moviesController.addMovie);

moviesRouter
    .route("/:id")
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie);

module.exports= moviesRouter;