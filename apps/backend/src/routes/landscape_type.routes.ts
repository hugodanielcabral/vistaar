import { Router } from "express";
import {
  getLandscapeType,
  getLandscapeTypes,
} from "../controllers/landscape_type.controllers";
import { idValidator } from "../middlewares/validators/idValidator";

const router = Router();

router.get("/landscape_type/:id", idValidator("Tipo de paisaje"), getLandscapeType);
router.get("/landscape_type", getLandscapeTypes);

export default router;
