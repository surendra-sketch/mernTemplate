import asyncHandler from "express-async-handler";
import UserModel from "../model/userModel.js";
// @des Auth user/set token
// rout POST /api/users/auth
// access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @des Register a new user
// rout POST /api/users
// access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    res.status(404);
    throw new Error("Fill all field");
  }

  const newuser = {
    name,
    email,
    password,
  };
  const user = await UserModel.create(newuser);
  await user.save();
  res.status(201).send(user);
});

// @des  Logout user
// rout POST /api/users/logout
// access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

// @des  Get user profile
// rout GET /api/users/profile
// access Private
const getUser = asyncHandler(async (req, res) => {
  const user = await UserModel.find();

  res.status(200).json(user);
});

// @des  Update user profile
// rout PUT /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile updated " });
});

// @des  delete user profile
// rout DELETE /api/users/profile/:id
// access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
  await UserModel.findByIdAndRemove(req.params.id);

  // res.json(deleteuser._id);
  // const deletUser = await UserModel.findById(req.params.id);

  // if (!deletUser) {
  //   res.status(400);
  //   throw new Error("user not found for delete !");
  // }
  // await deletUser.remove();
  res.status(200).json({ id: req.params.id });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUserProfile,
  deleteUserProfile,
};
