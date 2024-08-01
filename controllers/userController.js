const catchAsync = require("./../utils/catchAsync");

const factory = require("../controllers/handlerFactory");

const User = require("./../models/userModel");

// exports.createUser = catchAsync(async (req, res, next) => {
//   console.log("req: ", req);
//   const newUser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//   });

//   res.status(201).json({
//     status: "success",
//     data: {
//       data: newUser,
//     },
//   });
// });

exports.uploadPhotoResponse = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      msg: "Image uploaded successfully!",
    },
  });
});

exports.createUser = factory.createOne(User);
exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
