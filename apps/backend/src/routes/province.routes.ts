import { Router } from "express";
import { getProvince, getProvinces } from "../controllers/province.controllers";
import { validateProvince } from "../middlewares/validators/province.validators";

const router = Router();

router.get("/province/:id", validateProvince, getProvince);
router.get("/province", getProvinces);

export default router;
