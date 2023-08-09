import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/userControllers.js";

router.post("/auth", authUser);
router.post("/register/user", registerUser);
router.post("/logoutuser", logoutUser);
router.get("/getuser", getUser);
router.put("/updateuser/:id", updateUserProfile);
router.delete("/deleteuser/:id", deleteUserProfile);

export default router;
