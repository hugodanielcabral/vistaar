import { Router } from "express";
import {
  getLandscapeType,
  getLandscapeTypes,
} from "../controllers/landscape_type.controllers";
import { validateLandscapeType } from "../middlewares/validators/landscape_type.validators";

const router = Router();

router.get("/landscape_type/:id", validateLandscapeType, getLandscapeType);
router.get("/landscape_type", getLandscapeTypes);

export default router;
