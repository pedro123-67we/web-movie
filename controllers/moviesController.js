const {MoviesModel} = require ('./../models');
const {StatusCodes} = require ('http-status-codes');

const getAllMovies = async (req, res)=>{
    const movies = await MoviesModel.find();
    res.status(StatusCodes.ACCEPTED).json({
        data: movies,
        success:"true",
    });
};

const getMovie = async (req,res) => {
    const {id} = req.params;
    const movie = await MoviesModel.findById(id);
    if (!movie){
        throw new NotFoundError("Pelicula no encontrada");
    }
    res.status(StatusCodes.ACCEPTED).json({
        data: movie,
        success:"true",
    });
};

const addMovie = async (req,res)=>{
    const addmovie = await MoviesModel.create(req.body);
    res.status(StatusCodes.CREATED).json({
        result: addmovie,
        success: "true",
    });
    
};

const updateMovie = async (req,res) =>{
    const {id} = req.params;
    const upmovie = await MoviesModel.findByIdAndUpdate(
        id,
        {...req.body},
        {
            new:true,
            runValidators:true,
        });
        if (!upmovie){
            throw new NotFoundError("no encontrada");
        }
        res.status(StatusCodes.ACCEPTED).json({
            data:upmovie,
            success:"true",
        });
    };

const deleteMovie = async(req,res) =>{
    const {id}= req.params;
    await MoviesModel.findByIdAndRemove(id);
    res.status(StatusCodes.ACCEPTED).json({
        data: null,
        success:"true",
    })
};

module.exports ={
    getAllMovies,
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie
}