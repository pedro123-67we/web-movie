const {SingupModel} = require ('../../models');
const {StatusCodes} = require ('http-status-codes');

const getAllUser = async (req,res) =>{
    const users = await SingupModel.find();
    res.status(StatusCodes.ACCEPTED).json({
        data: users,
        success: "true",
    });
};

const getUser = async (req,res) =>{
    const {id}= req.params;
    const user = await SingupModel.findById(id);
    if (!user){
        throw new NotFoundError("Usuario no encontrado");
    }
    res.status(StatusCodes.ACCEPTED).json({
        data: user,
        success:"true",
    });
};

const addUser = async (req,res) =>{
    const newuser = await SingupModel.create(req.body);
    res.status(StatusCodes.CREATED).json({
        result: newuser,
        success:"true",
    });
};

const updateUser = async (req,res) =>{
    const {id} = req.params;
    const upuser = await SingupModel.findByIdAndUpdate(
        id,
        {...req.body},
        {
            new:true,
            runValidators:true,
        });
        if (!upuser){
            throw new NotFoundError("no encontrado");
        }
        res.status(StatusCodes.ACCEPTED).json({
            data:upuser,
            success:"true",
        });
    };

const deleteUser = async (req, res) => {
    const {id} = req.params;
    await SingupModel.findByIdAndRemove (id);
    res.status(StatusCodes.ACCEPTED).json({
        data: null,
        success:"true"
    });
};

module.exports={
    getAllUser,
    getUser,
    addUser,
    updateUser,
    deleteUser
}
