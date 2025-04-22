import { Router } from "express";
import {
  getLocation,
  getLocations,
} from "../controllers/locations.controllers";
import { idValidator } from "../middlewares/validators/idValidator";

const router = Router();

router.get("/locations/:id", idValidator("Ubicación"), getLocation);
router.get("/locations", getLocations);

export default router;
