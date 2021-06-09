import express from "express";
const router = express.Router();
import {
  contact
} from "../controllers/contactController.js";


router.route("/").post(contact)

export default router;
