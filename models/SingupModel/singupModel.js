const mongoose = require('mongoose');
const {Schema} = mongoose;

const singupSchema =new Schema ({
    name: {type: String, require: true, trim:true},
    email: {type:String, require:true,},
    password1:{type: String, require:true },
    tel: {type: Number, require:true}
});

module.exports= mongoose.model('Singup',singupSchema);