import express from "express";
import { getProvince, getProvinces } from "../controllers/province.controllers";

const app = express();

const router = app;

router.get("/province/:id", getProvince);

router.get("/province", getProvinces)

export default router;
