import { Router } from "express";
import { getProvince, getProvinces } from "../controllers/province.controllers";
import { idValidator } from "../middlewares/validators/idValidator";

const router = Router();

router.get("/province/:id", idValidator("Provincia"), getProvince);
router.get("/province", getProvinces);

export default router;
