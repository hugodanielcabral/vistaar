import { Router } from "express";
import {
  getLocation,
  getLocations,
} from "../controllers/locations.controllers";
import { validateLocation } from "../middlewares/validators/locations.validators";

const router = Router();

router.get("/locations/:id", validateLocation, getLocation);
router.get("/locations", getLocations);

export default router;
