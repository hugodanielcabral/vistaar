import { Router } from "express";
import { getProvince, getProvinces } from "../controllers/province.controllers";

const router = Router();

router.get("/province/:id", getProvince);
router.get("/province", getProvinces);

export default router;