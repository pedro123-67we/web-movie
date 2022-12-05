const mongoose = require ('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema ({
    numberid: {type: Number, required: true },
    namemovie: {type: String, required: true, trim : true},
    description: {type: String, required: true, trim: true},
    duration: {type:String, required: true}
})


module.exports = mongoose.model('Movies', movieSchema);
