import { Router } from "express";
import {
  getLandscape,
  getLandscapes,
} from "../controllers/landscapes.controllers";
import { idValidator } from "../middlewares/validators/idValidator";

const router = Router();

router.get("/landscapes/:id", idValidator("Paisaje"), getLandscape);
router.get("/landscapes", getLandscapes);

export default router;
