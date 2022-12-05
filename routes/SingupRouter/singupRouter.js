const express = require ('express');
const {singupController} = require('./../../controllers');

const singupRouter = express.Router();

singupRouter
    .route("/")
    .get(singupController.getAllUser)
    .post(singupController.addUser);

singupRouter
    .route("/:id")
    .get(singupController.getUser)
    .patch(singupController.updateUser)
    .delete(singupController.deleteUser);

module.exports= singupRouter;