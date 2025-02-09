import express from "express";
import { signup, login } from "../controllers/authController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/signup", upload.single("photo"), signup);
router.post("/login", login);

export default router;
