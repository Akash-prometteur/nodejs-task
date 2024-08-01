const express = require("express");
const userController = require("./../controllers/userController");
const loggerMiddleware = require("./../middlewares/logger");
const uploadPhoto = require("./../middlewares/uploadPhoto");

const router = express.Router();

router.use(loggerMiddleware.logger);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(uploadPhoto.uploadUserPhoto, userController.updateUser)
  .delete(userController.deleteUser);

router
  .route("/uploadPhoto")
  .post(uploadPhoto.uploadUserPhoto, userController.uploadPhotoResponse);

module.exports = router;
